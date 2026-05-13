import { motion } from "framer-motion";
import { Star, ScribbleArrow } from "@/components/Doodles";

const items = [
  {
    title: "We elevate talent",
    desc: "People Builders is a chance to spotlight the work of leaders who give as much value as they receive in return.",
  },
  {
    title: "We build trust",
    desc: "As a People company, we want trust and experience to be at the core of everything we do for the People community.",
  },
  {
    title: "We thrive together",
    desc: "People Builders focuses on the collective. The more curious and brave thinking, the better — that's why we built this.",
  },
];

export function WhyJoin() {
  return (
    <section id="why-join" className="relative py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl"
        style={{ rotate: "-0.5deg" }}
      >
        {/* Decorative scribbles */}
        <svg className="absolute top-6 left-8 w-20 h-20 text-primary-foreground/40" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 Q 30 20, 50 30 T 80 50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="80" cy="50" r="3" fill="currentColor" />
        </svg>
        <Star className="absolute top-12 right-1/4 w-8 h-8 text-primary-foreground/60" />
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 text-primary-foreground/20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 12" />
        </motion.svg>

        <div className="relative grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-hand text-lg" style={{ fontFamily: "cursive" }}>
              ~ why join? ~
            </span>
            <h2 className="text-5xl md:text-6xl font-black mt-2 leading-none tracking-tight">
              Why join
              <br />
              People Builders?
            </h2>
            <p className="mt-6 text-primary-foreground/85 max-w-md">
              We empower People leaders, like you, to create and access tools
              and resources to successfully lead a thriving remote or hybrid
              organization.
            </p>
            <div className="mt-10 hidden md:flex items-end gap-2">
              <div className="font-black text-7xl tracking-tighter italic">
                PE<span className="inline-block -translate-y-2">O</span>PLE
              </div>
            </div>
            <div className="hidden md:block font-black text-7xl tracking-tighter italic mt-[-12px]">
              BUILDERS
            </div>
            <span className="hidden md:inline-block mt-2 text-sm font-medium opacity-80">
              by Lovely · est. today
            </span>
          </div>

          <div className="space-y-8 relative">
            <ScribbleArrow className="absolute -top-12 -left-8 w-20 h-12 text-primary-foreground/50 rotate-180" />
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-t border-primary-foreground/30 pt-6 group"
              >
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-primary-foreground/60 text-sm">0{i + 1}</span>
                  {it.title}
                </h3>
                <p className="mt-3 text-primary-foreground/85 leading-relaxed">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
