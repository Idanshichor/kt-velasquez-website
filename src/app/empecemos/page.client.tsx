"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KtStar } from "@/components/home/scrub";
import { sendForm } from "@/lib/send-form";
import { CLOSING, INTRO, QUESTIONS, type Question } from "./questions";

type Answers = Record<string, string | string[]>;
type Status = "idle" | "sending" | "sent" | "error";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";
const DRAFT_KEY = "kt-empecemos-draft";
const CONTACT = [
  { name: "nombre", label: "Nombre", type: "text", autoComplete: "name", inputMode: undefined },
  { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email", inputMode: "email" },
  { name: "whatsapp", label: "WhatsApp con código de país", type: "tel", autoComplete: "tel", inputMode: "tel" },
] as const;
const INPUT =
  "w-full rounded-xl border border-[rgba(26,26,26,0.22)] bg-white px-4 py-3.5 text-base text-[var(--color-brand-black)] placeholder:text-[rgba(26,26,26,0.4)] outline-none transition-[border-color,box-shadow] focus:border-[var(--color-brand-black)] focus:shadow-[0_0_0_4px_var(--color-brand-pink-light)]";

const filled = (v: string | string[] | undefined) => (Array.isArray(v) ? v.length > 0 : !!v?.trim());

const otherKey = (name: string) => `${name}_otra`;
const picked = (v: string | string[] | undefined, o: string) => (Array.isArray(v) ? v.includes(o) : v === o);

/** Which keys a question needs before the form can be sent. The "cuéntame" boxes under options are optional,
 *  except the one under "Otra...", which is needed once that option is picked. */
function requiredKeys(q: Question, answers: Answers): string[] {
  const f = q.field;
  if (f.kind === "contact") return CONTACT.map((c) => c.name);
  const keys = [f.name];
  if ((f.kind === "single" || f.kind === "multi") && f.other && picked(answers[f.name], f.other)) keys.push(otherKey(f.name));
  return keys;
}

// Display numbers: the contact block has none, questions count from 1.
const NUMBERS = QUESTIONS.map((q, i) => (q.numbered ? QUESTIONS.slice(0, i + 1).filter((x) => x.numbered).length : 0));

/** Katherine's intake form: purple welcome, numbered questions on white, gold thank-you. Spanish only, not linked anywhere. */
export default function EmpecemosPageClient() {
  const [answers, setAnswers] = useState<Answers>({});
  const [missing, setMissing] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const topRef = useRef<HTMLDivElement>(null);

  // Keep a draft on this device so a closed tab doesn't lose a half-written answer.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      // Read after mount, not during render, so the server HTML and first client render match.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setAnswers(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      if (status !== "sent") localStorage.setItem(DRAFT_KEY, JSON.stringify(answers));
    } catch {}
  }, [answers, status]);

  const complete = (q: Question) => requiredKeys(q, answers).every((k) => filled(answers[k]));
  const done = QUESTIONS.filter(complete).length;

  const set = (key: string, value: string | string[]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setMissing((m) => {
      if (!m.size) return m;
      const i = QUESTIONS.findIndex((q) => q.field.kind === "contact" ? CONTACT.some((c) => c.name === key) : key.startsWith((q.field as { name: string }).name));
      if (i < 0 || !m.has(i)) return m;
      const next = new Set(m);
      next.delete(i);
      return next;
    });
  };
  const toggle = (key: string, option: string) => {
    const list = (answers[key] as string[] | undefined) ?? [];
    set(key, list.includes(option) ? list.filter((o) => o !== option) : [...list, option]);
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const gaps = QUESTIONS.map((q, i) => (complete(q) ? -1 : i)).filter((i) => i >= 0);
    const email = String(answers.email ?? "").trim();
    const badEmail = !!email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (gaps.length || badEmail) {
      const ns = new Set(gaps);
      if (badEmail) ns.add(0);
      setMissing(ns);
      const first = Math.min(...ns);
      document.getElementById(`q${first}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // One row per answer, in form order, numbered as the client saw them.
    const rows: [string, string][] = [];
    const text = (k: string) => String(answers[k] ?? "").trim();
    QUESTIONS.forEach((q, i) => {
      const f = q.field;
      if (f.kind === "contact") {
        CONTACT.forEach((c) => rows.push([c.label, text(c.name)]));
        return;
      }
      const v = answers[f.name];
      rows.push([`${NUMBERS[i]}. ${q.title}`, Array.isArray(v) ? v.join("\n") : text(f.name)]);
      if ((f.kind === "single" || f.kind === "multi") && f.other && picked(v, f.other)) rows.push([f.other, text(otherKey(f.name))]);
      if (q.extra) rows.push([q.extra.label, text(q.extra.name)]);
    });

    // Built by hand so the email only carries the answers, not the raw input names.
    const fd = new FormData();
    const bot = e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null;
    if (bot?.checked) fd.set("botcheck", "on");
    const name = String(answers.nombre).trim();
    fd.set("name", name);
    fd.set("email", email);
    fd.set("answers", JSON.stringify(rows));
    rows.forEach(([k, v]) => fd.set(k, v)); // read by the Web3Forms fallback

    setStatus("sending");
    const ok = await sendForm(fd, `Nuevo formulario de proyecto: ${name}`, "intake").catch(() => false);
    if (ok) {
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {}
      setStatus("sent");
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else setStatus("error");
  }

  return (
    <div ref={topRef} className="min-h-screen bg-white text-[var(--color-brand-black)] flex flex-col">
      {/* Slim header: logo home, progress bar along the bottom edge */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[rgba(26,26,26,0.12)]">
        <div className="max-w-5xl mx-auto h-16 md:h-20 [@media(max-height:500px)]:h-12 px-6 md:px-10 flex items-center justify-between">
          <Link href="/" aria-label="Katherine Velasquez">
            <Image src="/images/KT_LOGO.webp" alt="Katherine Velasquez" width={350} height={120} className="h-10 md:h-14 [@media(max-height:500px)]:h-8 w-auto object-contain" priority />
          </Link>
          {status !== "sent" && (
            <p className="text-xs font-bold tracking-[0.2em] tabular-nums" aria-live="polite">
              {done}/{QUESTIONS.length}
            </p>
          )}
        </div>
        {status !== "sent" && (
          <div className="h-[3px] bg-[var(--color-brand-pink-light)]">
            <div className="h-full bg-[var(--color-brand-purple)] transition-[width] duration-500 ease-out" style={{ width: `${(done / QUESTIONS.length) * 100}%` }} />
          </div>
        )}
      </header>

      <main className="flex-grow">
        {status === "sent" ? (
          <section className="relative overflow-hidden bg-[var(--color-brand-gold)] min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center px-6 md:px-16 py-24">
            <KtStar className="kt-turn absolute -right-16 -bottom-16 w-72 h-72 md:w-[28rem] md:h-[28rem] text-white/40" />
            <div className="relative max-w-4xl mx-auto">
              <KtStar className="w-10 h-10 md:w-14 md:h-14 mb-10" />
              <h1 className={`${TITLE} text-4xl sm:text-5xl md:text-7xl`}>{CLOSING.title}</h1>
              <p className="mt-8 md:mt-10 border-t border-[var(--color-brand-black)] pt-8 text-lg md:text-2xl leading-[1.55] max-w-3xl [text-wrap:pretty]">{CLOSING.text}</p>
            </div>
          </section>
        ) : (
          <>
            {/* Purple welcome */}
            <section className="relative overflow-hidden bg-[var(--color-brand-purple)] text-white pt-16 md:pt-24 pb-16 md:pb-24 px-6 md:px-16">
              <KtStar className="absolute right-6 md:right-16 top-10 md:top-16 w-10 md:w-16 h-10 md:h-16 text-white" />
              <div className="relative max-w-5xl mx-auto">
                <h1>
                  <span className={`${TITLE} block text-[12.5vw] sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-[0.85] tracking-[-0.03em]`}>{INTRO.title[0]}</span>
                  <span className="block font-script text-[3.6rem] sm:text-7xl md:text-8xl lg:text-9xl leading-none mt-2 md:-mt-2 md:ml-24">{INTRO.title[1]}</span>
                </h1>
                <div className="mt-12 md:mt-16 border-t border-white pt-8 max-w-3xl space-y-5">
                  {INTRO.lead.map((p) => (
                    <p key={p} className="text-lg md:text-2xl leading-[1.55] md:leading-[1.5]">{p}</p>
                  ))}
                </div>
              </div>
            </section>

            <form onSubmit={submit} noValidate className="px-6 md:px-16 pb-24 md:pb-32">
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
              <ol className="max-w-5xl mx-auto">
                {QUESTIONS.map((q, i) => (
                  <li
                    key={i}
                    id={`q${i}`}
                    className="scroll-mt-24 md:scroll-mt-28 [@media(max-height:500px)]:scroll-mt-16 grid md:grid-cols-[7rem_minmax(0,1fr)] gap-3 md:gap-6 border-b border-[rgba(26,26,26,0.14)] py-12 md:py-16 motion-safe:animate-[kt-fade_0.5s_ease-out]"
                  >
                    {q.numbered ? (
                      <span className="font-heading text-5xl md:text-7xl leading-none tabular-nums text-[var(--color-brand-gold-deep)]">{String(NUMBERS[i]).padStart(2, "0")}</span>
                    ) : (
                      <KtStar className="w-8 h-8 md:w-10 md:h-10 md:mt-1 text-[var(--color-brand-gold-deep)]" />
                    )}
                    <fieldset className="min-w-0">
                      <legend className="font-heading text-2xl md:text-[2rem] leading-[1.2] [text-wrap:balance]">{q.title}</legend>
                      {q.help?.map((h) => (
                        <p key={h} className="mt-3 text-base leading-[1.6] text-[rgba(26,26,26,0.72)] max-w-2xl">{h}</p>
                      ))}
                      <div className="mt-7">
                        <QuestionField q={q} answers={answers} set={set} toggle={toggle} />
                      </div>
                      {(q.field.kind === "single" || q.field.kind === "multi") && q.field.other && picked(answers[q.field.name], q.field.other) && (
                        <textarea
                          rows={2}
                          aria-label={q.field.other}
                          className={`${INPUT} resize-y mt-3`}
                          value={String(answers[otherKey(q.field.name)] ?? "")}
                          onChange={(e) => set(otherKey((q.field as { name: string }).name), e.target.value)}
                        />
                      )}
                      {q.extra && (
                        <label className="block mt-6">
                          <span className="block text-base leading-[1.6] mb-3">{q.extra.label}</span>
                          <textarea rows={4} className={`${INPUT} resize-y`} value={String(answers[q.extra.name] ?? "")} onChange={(e) => set(q.extra!.name, e.target.value)} />
                        </label>
                      )}
                      {q.note && <p className="mt-8 border-l-[3px] border-[var(--color-brand-pink)] pl-4 text-base md:text-lg leading-[1.6] max-w-2xl">{q.note}</p>}
                      {missing.has(i) && (
                        <p role="alert" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B3124F]">
                          <KtStar className="w-3.5 h-3.5" /> Falta completar esta respuesta.
                        </p>
                      )}
                    </fieldset>
                  </li>
                ))}
              </ol>

              <div className="max-w-5xl mx-auto pt-12 md:pt-16 md:pl-[8.5rem] flex flex-col items-start gap-5">
                <button type="submit" disabled={status === "sending"} className="kt-btn kt-btn-dark cursor-pointer disabled:opacity-60 disabled:cursor-wait">
                  <span>{status === "sending" ? "Enviando..." : "Enviar respuestas"}</span>
                  <span className="kt-btn-dot" aria-hidden="true">
                    <KtStar className="w-3.5 h-3.5" />
                  </span>
                </button>
                {status === "error" && (
                  <p role="alert" className="text-sm font-semibold text-[#B3124F]">
                    No pudimos enviar tus respuestas. Revisa tu conexión e inténtalo de nuevo.
                  </p>
                )}
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

function QuestionField({ q, answers, set, toggle }: { q: Question; answers: Answers; set: (k: string, v: string) => void; toggle: (k: string, o: string) => void }) {
  const f = q.field;
  if (f.kind === "contact")
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {CONTACT.map((c) => (
          <label key={c.name} className={c.name === "nombre" ? "md:col-span-2" : ""}>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-2">{c.label}</span>
            <input
              type={c.type}
              name={`f_${c.name}`}
              autoComplete={c.autoComplete}
              inputMode={c.inputMode}
              className={INPUT}
              value={String(answers[c.name] ?? "")}
              onChange={(e) => set(c.name, e.target.value)}
            />
          </label>
        ))}
      </div>
    );
  if (f.kind === "text")
    return <textarea rows={f.rows ?? 5} aria-label={q.title} className={`${INPUT} resize-y`} value={String(answers[f.name] ?? "")} onChange={(e) => set(f.name, e.target.value)} />;

  const multi = f.kind === "multi";
  const chosen = answers[f.name];
  return (
    <div className="grid gap-3">
      {f.options.map((o) => {
        const on = multi ? ((chosen as string[] | undefined) ?? []).includes(o) : chosen === o;
        return (
          <label
            key={o}
            className={`group flex items-start gap-4 rounded-xl border px-4 py-4 md:px-5 cursor-pointer transition-colors ${
              on ? "border-[var(--color-brand-black)] bg-[var(--color-brand-pink-light)]" : "border-[rgba(26,26,26,0.18)] hover:border-[rgba(26,26,26,0.45)]"
            }`}
          >
            <input
              type={multi ? "checkbox" : "radio"}
              name={`f_${f.name}`}
              checked={on}
              onChange={() => (multi ? toggle(f.name, o) : set(f.name, o))}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className={`mt-0.5 shrink-0 w-6 h-6 grid place-items-center border-[1.5px] border-[var(--color-brand-black)] transition-colors peer-focus-visible:shadow-[0_0_0_4px_var(--color-brand-pink)] ${multi ? "rounded-md" : "rounded-full"} ${
                on ? "bg-[var(--color-brand-black)] text-[var(--color-brand-gold)]" : "bg-white"
              }`}
            >
              {on && <KtStar className="w-3.5 h-3.5" />}
            </span>
            <span className="text-base leading-[1.5]">{o}</span>
          </label>
        );
      })}
    </div>
  );
}
