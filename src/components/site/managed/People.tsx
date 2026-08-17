import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { peopleSection } from "@/content/securite-managee";
import { useScrollReveal } from "@/lib/motion";

const clueById = Object.fromEntries(peopleSection.clues.map((c) => [c.id, c]));

function ClueButton({
  id,
  active,
  onSelect,
  children,
}: {
  id: string;
  active: boolean;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={active}
      aria-label={`Indice : ${clueById[id]?.label}`}
      className={`cursor-pointer break-words rounded-sm px-1 text-left underline decoration-dashed decoration-1 underline-offset-4 transition-colors duration-300 ${
        active
          ? "bg-primary/12 text-primary decoration-primary"
          : "text-foreground decoration-border-strong hover:bg-primary/8 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}

export function People() {
  const [openClue, setOpenClue] = useState<string | null>(null);
  const ref = useScrollReveal<HTMLDivElement>({ variant: "block" });
  const clue = openClue ? clueById[openClue] : null;
  const select = (id: string) =>
    setOpenClue((prev) => (prev === id ? null : id));

  return (
    <section id="equipes" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{peopleSection.title}</h2>
          {peopleSection.paragraphs.map((p, i) => (
            <p
              key={p}
              className={`measure ${i === 0 ? "lead mt-4 text-foreground" : "small-copy mt-6 text-muted-foreground"}`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Interactive phishing sample */}
        <div ref={ref} className="mt-12 md:mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-border pt-6">
            <p className="display-4 text-foreground">
              {peopleSection.demoLabel}
            </p>
            <p className="text-[0.8125rem] text-muted-foreground">
              {peopleSection.demoHint}
            </p>
          </div>

          <div className="mt-8 grid gap-px bg-border lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]">
            {/* Fake email */}
            <div className="bg-surface p-6 md:p-10">
              <div className="border border-border bg-background">
                <div className="border-b border-border px-5 py-4">
                  <p className="label-mono text-muted-foreground">De</p>
                  <p className="mt-1.5 text-[0.875rem] leading-snug">
                    <ClueButton
                      id="sender"
                      active={openClue === "sender"}
                      onSelect={select}
                    >
                      {peopleSection.email.from}
                    </ClueButton>
                  </p>
                  <p className="label-mono mt-4 text-muted-foreground">À</p>
                  <p className="mt-1.5 text-[0.875rem] text-muted-foreground">
                    {peopleSection.email.to}
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="display-4 text-foreground">
                    {peopleSection.email.subject}
                  </p>
                  {peopleSection.email.lines.map((l) => (
                    <p
                      key={l}
                      className="small-copy mt-4 text-muted-foreground"
                    >
                      {l}
                    </p>
                  ))}
                  <p className="mt-5 text-[0.9375rem]">
                    <ClueButton
                      id="link"
                      active={openClue === "link"}
                      onSelect={select}
                    >
                      {peopleSection.email.linkText}
                    </ClueButton>
                  </p>
                  <p className="mt-6 text-[0.875rem]">
                    <ClueButton
                      id="attachment"
                      active={openClue === "attachment"}
                      onSelect={select}
                    >
                      <span className="label-mono mr-2 text-muted-foreground">
                        PJ
                      </span>
                      {peopleSection.email.attachment}
                    </ClueButton>
                  </p>
                  <p className="small-copy mt-6 text-muted-foreground">
                    {peopleSection.email.signature}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation panel — top padding matches the email card's own
                header inset (px-5 py-4) so both columns' first line of text
                sits on the same baseline. */}
            <div className="bg-foreground px-6 pb-6 pt-10 md:px-10 md:pb-10 md:pt-14">
              <AnimatePresence mode="wait" initial={false}>
                {clue ? (
                  <motion.div
                    key={clue.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <p className="text-[0.8125rem] font-semibold text-primary">
                      {clue.label}
                    </p>
                    <h3 className="display-3 mt-5 text-background">
                      {clue.title}
                    </h3>
                    <p className="small-copy measure mt-5 text-background/70">
                      {clue.body}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[0.8125rem] font-semibold text-background/55">
                      Trois indices
                    </p>
                    <ul className="mt-6 border-t border-background/15">
                      {peopleSection.clues.map((c) => (
                        <li
                          key={c.id}
                          className="border-b border-background/15 py-4 text-background/70"
                        >
                          <span className="small-copy">{c.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="small-copy mt-6 text-background/55">
                      Sélectionnez une zone soulignée dans l'e-mail pour
                      afficher l'explication.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
