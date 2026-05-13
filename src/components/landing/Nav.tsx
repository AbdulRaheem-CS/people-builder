import { motion } from "framer-motion";

export function Nav() {
  const links = ["Features", "Why Join", "Resources", "FAQ"];
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-background/80 backdrop-blur-xl border border-border rounded-full shadow-lg flex items-center gap-6"
    >
      <a href="#" className="font-black text-xl tracking-tight">
        people<span className="text-primary">*</span>
      </a>
      <div className="hidden md:flex items-center gap-5 text-sm font-medium">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
      <button className="bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
        Join now
      </button>
    </motion.nav>
  );
}
