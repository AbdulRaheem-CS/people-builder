import { motion } from "framer-motion";
import { Squiggle } from "@/components/Doodles";

export function Footer() {
  const cols = [
    { title: "Product", links: ["Pay & Benefits", "Equity", "Compliance", "Time Off", "API"] },
    { title: "Resources", links: ["Pricing", "Blog", "Customers", "Help Center", "Newsletter"] },
    { title: "Company", links: ["About", "Careers", "Press", "Partners", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
  ];
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 pb-16 border-b border-background/20">
          <div className="md:col-span-1">
            <div className="font-black text-2xl">
              people<span className="text-primary">*</span>
            </div>
            <p className="mt-4 text-sm text-background/60">
              Built by humans, for humans rebuilding work.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <h2
            className="font-black tracking-tighter leading-[0.8]"
            style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
          >
            people<span className="text-primary">.</span>
          </h2>
          <div className="text-sm text-background/60">
            <Squiggle className="w-20 h-4 text-primary mb-2" />
            <p>© 2026 People Builders. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
