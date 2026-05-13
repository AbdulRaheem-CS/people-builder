import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Star, ScribbleArrow, Lightning, Smiley, Underline, Squiggle } from "@/components/Doodles";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      {/* Animated blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-20 -left-20 w-96 h-96 bg-primary/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-muted/60 rounded-full blur-3xl"
      />

      {/* Floating doodles */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-20 text-primary"
      >
        <Star className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-32 left-16 text-foreground"
      >
        <Lightning className="w-10 h-10" />
      </motion.div>
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-12 text-foreground hidden md:block"
      >
        <Smiley className="w-14 h-14" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-40 right-1/3 text-primary hidden lg:block"
      >
        <Star className="w-8 h-8" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-secondary border border-border rounded-full text-sm font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Where people leaders connect, collaborate & grow
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]"
        >
          The{" "}
          <span className="relative inline-block">
            <span className="italic font-serif text-primary">people</span>
            <Underline className="absolute -bottom-2 left-0 w-full text-primary" />
          </span>{" "}
          builders
          <br />
          community<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-foreground/70"
        >
          Join a global community for HR &amp; People leaders who are quietly
          rebuilding the future of work — together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group relative bg-foreground text-background px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl"
          >
            Join the community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full rotate-12">
              free!
            </span>
          </motion.button>
          <a href="#why-join" className="text-sm font-medium underline underline-offset-4 hover:text-primary">
            See what's inside →
          </a>
        </motion.div>

        {/* Scribble arrow toward CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -right-2 md:right-20 top-[78%] text-primary hidden md:block"
        >
          <div className="relative">
            <ScribbleArrow className="w-24 h-16 -scale-x-100" />
            <span className="absolute -top-4 -left-8 font-hand text-sm rotate-[-8deg] text-foreground" style={{ fontFamily: "cursive" }}>
              start here!
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee accent */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 border-y border-border bg-primary/10">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-foreground/60 font-medium"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              ★ Built for HR rebels
              <Squiggle className="w-16 h-4 text-primary" />
              ✶ For people who care
              <Squiggle className="w-16 h-4 text-primary" />
              ✺ Make work human again
              <Squiggle className="w-16 h-4 text-primary" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
