import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Smiley, Star } from "@/components/Doodles";

const faqs = [
  { q: "What is People Builders?", a: "A global community for HR and People leaders to share resources, build playbooks, and rethink work — together." },
  { q: "Who is the People Builders community for?", a: "Anyone shaping people strategy: HR, talent, ops, founders. If you care about how teams work, you belong here." },
  { q: "What can I expect from People Builders?", a: "Live events, peer roundtables, expert AMAs, curated resources, and a Slack-style space full of brilliant practitioners." },
  { q: "Sounds good to me — how do I sign up?", a: "Tap the join button anywhere on this page. Takes about 30 seconds and it's completely free." },
  { q: "How much does it cost?", a: "Zero. Nada. Free forever for verified People practitioners." },
  { q: "Have other questions?", a: "Send us a note and a real human will reply within a day. Promise." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(2);
  return (
    <section id="faq" className="relative py-32 px-6 bg-secondary overflow-hidden">
      <Smiley className="absolute top-12 left-10 w-16 h-16 text-foreground/30 rotate-[-8deg]" />
      <Star className="absolute bottom-20 right-20 w-12 h-12 text-primary" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <span className="font-hand text-primary text-lg" style={{ fontFamily: "cursive" }}>
            ~ ask away ~
          </span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter mt-2">
            FAQ<span className="text-primary">'s</span>
          </h2>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="mt-8 inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center text-4xl">
              ✨
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className={`bg-card border-2 rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-primary shadow-[6px_6px_0_0_rgba(229,149,213,0.5)]" : "border-foreground/10"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 font-semibold"
                >
                  <span>{f.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="flex-shrink-0">
                    <Plus className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-foreground/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
