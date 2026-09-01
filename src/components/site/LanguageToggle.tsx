import { useLocale } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className={`flex items-center gap-1 text-[0.8125rem] ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        aria-pressed={locale === "fr"}
        className={`cursor-pointer px-1.5 py-1 transition-colors ${
          locale === "fr"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <span className="text-border-strong" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`cursor-pointer px-1.5 py-1 transition-colors ${
          locale === "en"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
