import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Star, Squiggle } from "@/components/Doodles";

export function MidCTA() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto bg-muted/40 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden border-2 border-foreground/10"
        style={{ rotate: "0.5deg" }}
      >
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">
            Ready to build what's next, <span className="italic font-serif text-primary">together?</span>
          </h3>
          <p className="mt-4 text-foreground/70">
            Join a global network of leaders shaping the future of work, one
            conversation at a time.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 bg-foreground text-background px-6 py-3 rounded-full font-semibold"
          >
            Learn more →
          </motion.button>
        </div>
        <motion.div
          animate={{ rotate: [-5, 5, -5], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="relative w-48 h-48 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full" />
          <span className="text-7xl">🪄</span>
          <Star className="absolute top-0 right-0 w-8 h-8 text-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function ShineCTA() {
  return (
    <section className="relative py-32 px-6 bg-foreground text-background overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 left-1/2 -translate-x-1/2"
      >
        <Heart className="w-24 h-24 text-primary fill-primary" strokeWidth={1.5} />
      </motion.div>
      <Star className="absolute top-20 left-20 w-10 h-10 text-primary" />
      <Squiggle className="absolute bottom-20 right-20 w-32 h-8 text-primary" />

      <div className="relative max-w-3xl mx-auto text-center pt-20">
        <h2 className="text-6xl md:text-7xl font-black tracking-tighter">
          It's <span className="italic font-serif text-primary">your time</span>
          <br />
          to shine<span className="text-primary">.</span>
        </h2>
        <p className="mt-6 text-background/70 max-w-md mx-auto">
          What happens when you put a bunch of People leaders in a room? We
          can't wait to find out.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-2xl"
        >
          Join now ✦
        </motion.button>
      </div>
    </section>
  );
}
