import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "./motion";

export type Locale = "fr" | "en";

const STORAGE_KEY = "surcingit-locale";
const FADE_OUT_MS = 160;
const FADE_IN_MS = 240;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

/** Starts as "fr" on every render (server and first client render) to avoid
 * a hydration mismatch, then syncs from localStorage once mounted — a
 * returning English-preference visitor sees one brief French flash before
 * the effect below flips it, which is the standard trade-off for a
 * client-only preference with no server-side cookie. */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  // Swapping every string on the page in one instant frame read as a jump
  // cut. Dip the whole tree to 0 opacity, swap the content while it's
  // invisible, then fade the new content back in — a brief cross-fade
  // instead of a hard replace, without touching every consuming component.
  const [fading, setFading] = useState(false);
  const reduced = usePrefersReducedMotion();
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const applyLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    if (reduced) {
      applyLocale(next);
      return;
    }
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setFading(true);
    fadeTimer.current = setTimeout(() => {
      applyLocale(next);
      requestAnimationFrame(() => setFading(false));
    }, FADE_OUT_MS);
  };

  const toggleLocale = () => setLocale(locale === "fr" ? "en" : "fr");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: reduced
            ? undefined
            : `opacity ${fading ? FADE_OUT_MS : FADE_IN_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

/** Pairs a French and an English content module (same shape) into one hook
 * that returns whichever matches the current locale. Used at the bottom of
 * each src/content/*.ts file: `export const useXContent = createLocaleContent(fr, en)`. */
export function createLocaleContent<T>(fr: T, en: T) {
  return function useLocaleContent(): T {
    const { locale } = useLocale();
    return locale === "en" ? en : fr;
  };
}
