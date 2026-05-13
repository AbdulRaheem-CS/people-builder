import { motion } from "framer-motion";
import { Star } from "@/components/Doodles";

const resources = [
  {
    tag: "Tools",
    title: "Global Employment Tools",
    desc: "Navigate global hiring and manage your distributed team with this growing set of free resources.",
    cta: "Try Tools",
    bg: "from-primary/30 to-muted/40",
    emoji: "🌍",
    sticker: "new!",
  },
  {
    tag: "Guide",
    title: "How to get started with hiring global talent",
    desc: "Going global means tapping into new talent pools — and a whole new way of working.",
    cta: "See Guide",
    bg: "from-muted/40 to-secondary",
    emoji: "📘",
    sticker: "hot",
  },
  {
    tag: "Podcast",
    title: "New World of Work Podcast",
    desc: "Tune in to a weekly mix of curated stories changing the world of HR.",
    cta: "Listen to Episodes",
    bg: "from-foreground to-foreground/80",
    emoji: "🎙️",
    sticker: "weekly",
    dark: true,
  },
];

export function Resources() {
  return (
    <section id="resources" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-hand text-primary text-lg" style={{ fontFamily: "cursive" }}>
            ~ for your back pocket ~
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-2">
            Resources to keep
            <br />
            <span className="italic font-serif">close at hand.</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Feeling stuck or just deeper into global hiring? Take a look at
            these tools, guides, and stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((r, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
              className={`group relative bg-gradient-to-br ${r.bg} rounded-3xl p-8 border-2 border-foreground/10 shadow-lg overflow-hidden ${
                r.dark ? "text-background" : ""
              }`}
            >
              <motion.div
                animate={{ rotate: [12, -8, 12] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
              >
                {r.sticker}
              </motion.div>

              <div className="text-6xl mb-6">{r.emoji}</div>
              <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                {r.tag}
              </span>
              <h3 className="mt-2 text-xl font-bold leading-tight">{r.title}</h3>
              <p className="mt-3 text-sm opacity-80 leading-relaxed">{r.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold border-b border-current pb-0.5 group-hover:gap-3 transition-all">
                {r.cta} <span>→</span>
              </div>
              <Star className="absolute bottom-6 right-6 w-6 h-6 opacity-40" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
