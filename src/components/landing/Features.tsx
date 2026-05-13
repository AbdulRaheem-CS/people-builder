import { motion } from "framer-motion";
import { Globe, Sprout, Send } from "lucide-react";
import { Star, Squiggle } from "@/components/Doodles";

const features = [
  {
    icon: Globe,
    title: "Connect with people who get it",
    desc: "Join a global tribe of HR and People leaders solving the same challenges as you, every single day.",
    rotate: "-2deg",
    color: "bg-primary/20",
  },
  {
    icon: Sprout,
    title: "Create resources that drive change",
    desc: "Co-build playbooks, templates, and frameworks with experts who've actually shipped them.",
    rotate: "1deg",
    color: "bg-muted/40",
  },
  {
    icon: Send,
    title: "Be equipped to make change happen",
    desc: "Walk away with practical tools and a brain trust ready to support your boldest moves.",
    rotate: "-1deg",
    color: "bg-secondary",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-hand text-primary text-lg" style={{ fontFamily: "cursive" }}>
            ~ what's inside ~
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-2">
            Lead with purpose.
            <br />
            <span className="italic font-serif">Build with people.</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            People Builders is more than a community — it's a collective of
            practitioners committed to reimagining how we work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: f.rotate }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
                className="relative bg-card border-2 border-foreground/10 rounded-3xl p-8 shadow-[8px_8px_0_0_rgba(88,84,87,0.15)] hover:shadow-[12px_12px_0_0_rgba(229,149,213,0.4)] transition-shadow"
              >
                <div className={`w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center mb-6 relative`}>
                  <Icon className="w-7 h-7 text-foreground" strokeWidth={1.8} />
                  <Star className="absolute -top-2 -right-2 w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{f.desc}</p>
                <Squiggle className="absolute bottom-4 right-6 w-12 h-3 text-primary opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
