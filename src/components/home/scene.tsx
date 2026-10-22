"use client";

import { useRef, type ReactNode } from "react";
import { useLanguage } from "@/context/language-context";
import { useScene } from "@/hooks/use-scene";
import type { SceneEnv } from "@/lib/motion";

type SceneProps = {
  id?: string;
  className?: string;
  build?: (env: SceneEnv) => void | (() => void);
  children: ReactNode;
};

/**
 * One section of the home page. It remounts when the language changes
 * (the key), so split text and pinned layouts never fight React.
 */
export function Scene({ id, className, build, children }: SceneProps) {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  useScene(ref, build, [language]);
  return (
    <section key={language} id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
