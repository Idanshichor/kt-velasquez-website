import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { genericEffects, type SceneEnv } from "@/lib/motion";

type Build = (env: SceneEnv) => void | (() => void);

/**
 * Runs a scene's scroll animations inside a scoped GSAP matchMedia.
 * Nothing runs when the visitor prefers reduced motion, so content just shows.
 * Everything is reverted on cleanup (language change, route change).
 */
export function useScene(ref: RefObject<HTMLElement | null>, build: Build | undefined, deps: unknown[]) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mm = gsap.matchMedia(root);
    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px)" },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        if (!motion) return;
        const cleanup = build?.({ root, desktop: !!desktop });
        genericEffects(root, !!desktop);
        return cleanup || undefined;
      },
    );
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
