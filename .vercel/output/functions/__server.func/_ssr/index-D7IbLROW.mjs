import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { S as Sparkles, A as ArrowRight, G as Globe, a as Sprout, b as Send, P as Plus, H as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Nav() {
  const links = ["Features", "Why Join", "Resources", "FAQ"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.nav,
    {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6 },
      className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-background/80 backdrop-blur-xl border border-border rounded-full shadow-lg flex items-center gap-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "font-black text-xl tracking-tight", children: [
          "people",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-5 text-sm font-medium", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${l.toLowerCase().replace(" ", "-")}`, className: "hover:text-primary transition-colors", children: l }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all", children: "Join now" })
      ]
    }
  );
}
const Squiggle = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 100 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    d: "M2 10 Q 12 0, 22 10 T 42 10 T 62 10 T 82 10 T 98 10",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    fill: "none"
  }
) });
const Star = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    d: "M12 2 L13.5 9 L21 10 L15 14.5 L17 22 L12 17.5 L7 22 L9 14.5 L3 10 L10.5 9 Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    fill: "currentColor",
    fillOpacity: "0.2"
  }
) });
const ScribbleArrow = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 100 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M5 10 C 30 5, 60 50, 85 35",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      fill: "none"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M75 28 L 88 36 L 80 48",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    }
  )
] });
const Lightning = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    d: "M13 2 L4 14 L11 14 L9 22 L20 9 L13 9 Z",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinejoin: "round",
    fill: "currentColor",
    fillOpacity: "0.3"
  }
) });
const Smiley = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "17", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "14", cy: "16", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "26", cy: "16", r: "1.5", fill: "currentColor" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 23 Q 20 31, 28 23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
] });
const Underline = ({ className = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 200 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    d: "M3 8 Q 50 2, 100 6 T 197 4",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    fill: "none"
  }
) });
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] },
        transition: { duration: 14, repeat: Infinity },
        className: "absolute top-20 -left-20 w-96 h-96 bg-primary/40 rounded-full blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] },
        transition: { duration: 18, repeat: Infinity },
        className: "absolute bottom-10 right-0 w-[500px] h-[500px] bg-muted/60 rounded-full blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: [0, 360] },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute top-32 right-20 text-primary",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-12 h-12" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, -15, 0] },
        transition: { duration: 4, repeat: Infinity },
        className: "absolute bottom-32 left-16 text-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightning, { className: "w-10 h-10" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: [-10, 10, -10] },
        transition: { duration: 5, repeat: Infinity },
        className: "absolute top-1/3 left-12 text-foreground hidden md:block",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smiley, { className: "w-14 h-14" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, 20, 0] },
        transition: { duration: 6, repeat: Infinity },
        className: "absolute top-40 right-1/3 text-primary hidden lg:block",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-8 h-8" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto text-center z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-secondary border border-border rounded-full text-sm font-medium",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
            "Where people leaders connect, collaborate & grow"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.8 },
          className: "text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]",
          children: [
            "The",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif text-primary", children: "people" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Underline, { className: "absolute -bottom-2 left-0 w-full text-primary" })
            ] }),
            " ",
            "builders",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "community",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.5 },
          className: "mt-8 text-lg md:text-xl max-w-2xl mx-auto text-foreground/70",
          children: "Join a global community for HR & People leaders who are quietly rebuilding the future of work — together."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.7 },
          className: "mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05, rotate: -1 },
                whileTap: { scale: 0.97 },
                className: "group relative bg-foreground text-background px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl",
                children: [
                  "Join the community",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full rotate-12", children: "free!" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why-join", className: "text-sm font-medium underline underline-offset-4 hover:text-primary", children: "See what's inside →" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1 },
          className: "absolute -right-2 md:right-20 top-[78%] text-primary hidden md:block",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScribbleArrow, { className: "w-24 h-16 -scale-x-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-4 -left-8 font-hand text-sm rotate-[-8deg] text-foreground", style: { fontFamily: "cursive" }, children: "start here!" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 overflow-hidden py-4 border-y border-border bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { x: [0, -1200] },
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
        className: "flex gap-12 whitespace-nowrap text-foreground/60 font-medium",
        children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
          "★ Built for HR rebels",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "w-16 h-4 text-primary" }),
          "✶ For people who care",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "w-16 h-4 text-primary" }),
          "✺ Make work human again",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "w-16 h-4 text-primary" })
        ] }, i))
      }
    ) })
  ] });
}
const features = [
  {
    icon: Globe,
    title: "Connect with people who get it",
    desc: "Join a global tribe of HR and People leaders solving the same challenges as you, every single day.",
    rotate: "-2deg",
    color: "bg-primary/20"
  },
  {
    icon: Sprout,
    title: "Create resources that drive change",
    desc: "Co-build playbooks, templates, and frameworks with experts who've actually shipped them.",
    rotate: "1deg",
    color: "bg-muted/40"
  },
  {
    icon: Send,
    title: "Be equipped to make change happen",
    desc: "Walk away with practical tools and a brain trust ready to support your boldest moves.",
    rotate: "-1deg",
    color: "bg-secondary"
  }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative py-32 px-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-primary text-lg", style: { fontFamily: "cursive" }, children: "~ what's inside ~" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-black tracking-tight mt-2", children: [
            "Lead with purpose.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif", children: "Build with people." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 max-w-xl mx-auto", children: "People Builders is more than a community — it's a collective of practitioners committed to reimagining how we work." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((f, i) => {
      const Icon = f.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40, rotate: 0 },
          whileInView: { opacity: 1, y: 0, rotate: f.rotate },
          viewport: { once: true },
          transition: { delay: i * 0.15 },
          whileHover: { y: -8, rotate: 0, scale: 1.02 },
          className: "relative bg-card border-2 border-foreground/10 rounded-3xl p-8 shadow-[8px_8px_0_0_rgba(88,84,87,0.15)] hover:shadow-[12px_12px_0_0_rgba(229,149,213,0.4)] transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center mb-6 relative`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-foreground", strokeWidth: 1.8 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute -top-2 -right-2 w-5 h-5 text-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-sm leading-relaxed", children: f.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "absolute bottom-4 right-6 w-12 h-3 text-primary opacity-60" })
          ]
        },
        i
      );
    }) })
  ] }) });
}
const items = [
  {
    title: "We elevate talent",
    desc: "People Builders is a chance to spotlight the work of leaders who give as much value as they receive in return."
  },
  {
    title: "We build trust",
    desc: "As a People company, we want trust and experience to be at the core of everything we do for the People community."
  },
  {
    title: "We thrive together",
    desc: "People Builders focuses on the collective. The more curious and brave thinking, the better — that's why we built this."
  }
];
function WhyJoin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-join", className: "relative py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "relative max-w-6xl mx-auto bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl",
      style: { rotate: "-0.5deg" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute top-6 left-8 w-20 h-20 text-primary-foreground/40", viewBox: "0 0 100 100", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 50 Q 30 20, 50 30 T 80 50", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "50", r: "3", fill: "currentColor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute top-12 right-1/4 w-8 h-8 text-primary-foreground/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.svg,
          {
            animate: { rotate: 360 },
            transition: { duration: 30, repeat: Infinity, ease: "linear" },
            className: "absolute -bottom-20 -right-20 w-80 h-80 text-primary-foreground/20",
            viewBox: "0 0 200 200",
            fill: "none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "90", stroke: "currentColor", strokeWidth: "2", strokeDasharray: "8 8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "60", stroke: "currentColor", strokeWidth: "2", strokeDasharray: "4 12" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-lg", style: { fontFamily: "cursive" }, children: "~ why join? ~" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-black mt-2 leading-none tracking-tight", children: [
              "Why join",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "People Builders?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-primary-foreground/85 max-w-md", children: "We empower People leaders, like you, to create and access tools and resources to successfully lead a thriving remote or hybrid organization." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 hidden md:flex items-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-black text-7xl tracking-tighter italic", children: [
              "PE",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block -translate-y-2", children: "O" }),
              "PLE"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block font-black text-7xl tracking-tighter italic mt-[-12px]", children: "BUILDERS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline-block mt-2 text-sm font-medium opacity-80", children: "by Lovely · est. today" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScribbleArrow, { className: "absolute -top-12 -left-8 w-20 h-12 text-primary-foreground/50 rotate-180" }),
            items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.15 },
                className: "border-t border-primary-foreground/30 pt-6 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary-foreground/60 text-sm", children: [
                      "0",
                      i + 1
                    ] }),
                    it.title
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/85 leading-relaxed", children: it.desc })
                ]
              },
              i
            ))
          ] })
        ] })
      ]
    }
  ) });
}
const faqs = [
  { q: "What is People Builders?", a: "A global community for HR and People leaders to share resources, build playbooks, and rethink work — together." },
  { q: "Who is the People Builders community for?", a: "Anyone shaping people strategy: HR, talent, ops, founders. If you care about how teams work, you belong here." },
  { q: "What can I expect from People Builders?", a: "Live events, peer roundtables, expert AMAs, curated resources, and a Slack-style space full of brilliant practitioners." },
  { q: "Sounds good to me — how do I sign up?", a: "Tap the join button anywhere on this page. Takes about 30 seconds and it's completely free." },
  { q: "How much does it cost?", a: "Zero. Nada. Free forever for verified People practitioners." },
  { q: "Have other questions?", a: "Send us a note and a real human will reply within a day. Promise." }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "relative py-32 px-6 bg-secondary overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Smiley, { className: "absolute top-12 left-10 w-16 h-16 text-foreground/30 rotate-[-8deg]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute bottom-20 right-20 w-12 h-12 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-primary text-lg", style: { fontFamily: "cursive" }, children: "~ ask away ~" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-6xl md:text-7xl font-black tracking-tighter mt-2", children: [
          "FAQ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "'s" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: [0, 8, -8, 0] },
            transition: { duration: 8, repeat: Infinity },
            className: "mt-8 inline-block",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center text-4xl", children: "✨" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { x: 4 },
            className: `bg-card border-2 rounded-2xl overflow-hidden transition-all ${isOpen ? "border-primary shadow-[6px_6px_0_0_rgba(229,149,213,0.5)]" : "border-foreground/10"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setOpen(isOpen ? null : i),
                  className: "w-full flex items-center justify-between text-left p-5 font-semibold",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { rotate: isOpen ? 45 : 0 }, className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-primary", strokeWidth: 2.5 }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-foreground/70", children: f.a })
                }
              ) })
            ]
          },
          i
        );
      }) })
    ] })
  ] });
}
function MidCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      className: "relative max-w-4xl mx-auto bg-muted/40 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden border-2 border-foreground/10",
      style: { rotate: "0.5deg" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl md:text-4xl font-black tracking-tight", children: [
            "Ready to build what's next, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif text-primary", children: "together?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/70", children: "Join a global network of leaders shaping the future of work, one conversation at a time." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05, rotate: -2 },
              whileTap: { scale: 0.97 },
              className: "mt-6 bg-foreground text-background px-6 py-3 rounded-full font-semibold",
              children: "Learn more →"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { rotate: [-5, 5, -5], y: [0, -10, 0] },
            transition: { duration: 5, repeat: Infinity },
            className: "relative w-48 h-48 flex items-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/30 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-7xl", children: "🪄" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute top-0 right-0 w-8 h-8 text-foreground" })
            ]
          }
        )
      ]
    }
  ) });
}
function ShineCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 px-6 bg-foreground text-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { scale: [1, 1.2, 1], rotate: [0, 360] },
        transition: { duration: 20, repeat: Infinity },
        className: "absolute -top-20 left-1/2 -translate-x-1/2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-24 h-24 text-primary fill-primary", strokeWidth: 1.5 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute top-20 left-20 w-10 h-10 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "absolute bottom-20 right-20 w-32 h-8 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto text-center pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-6xl md:text-7xl font-black tracking-tighter", children: [
        "It's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif text-primary", children: "your time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "to shine",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/70 max-w-md mx-auto", children: "What happens when you put a bunch of People leaders in a room? We can't wait to find out." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          whileHover: { scale: 1.05, rotate: -2 },
          whileTap: { scale: 0.97 },
          className: "mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-2xl",
          children: "Join now ✦"
        }
      )
    ] })
  ] });
}
const resources = [
  {
    tag: "Tools",
    title: "Global Employment Tools",
    desc: "Navigate global hiring and manage your distributed team with this growing set of free resources.",
    cta: "Try Tools",
    bg: "from-primary/30 to-muted/40",
    emoji: "🌍",
    sticker: "new!"
  },
  {
    tag: "Guide",
    title: "How to get started with hiring global talent",
    desc: "Going global means tapping into new talent pools — and a whole new way of working.",
    cta: "See Guide",
    bg: "from-muted/40 to-secondary",
    emoji: "📘",
    sticker: "hot"
  },
  {
    tag: "Podcast",
    title: "New World of Work Podcast",
    desc: "Tune in to a weekly mix of curated stories changing the world of HR.",
    cta: "Listen to Episodes",
    bg: "from-foreground to-foreground/80",
    emoji: "🎙️",
    sticker: "weekly",
    dark: true
  }
];
function Resources() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "resources", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-primary text-lg", style: { fontFamily: "cursive" }, children: "~ for your back pocket ~" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-black tracking-tight mt-2", children: [
            "Resources to keep",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif", children: "close at hand." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 max-w-xl mx-auto", children: "Feeling stuck or just deeper into global hiring? Take a look at these tools, guides, and stories." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: resources.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        whileHover: { y: -10, rotate: i % 2 === 0 ? -1 : 1 },
        className: `group relative bg-gradient-to-br ${r.bg} rounded-3xl p-8 border-2 border-foreground/10 shadow-lg overflow-hidden ${r.dark ? "text-background" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: [12, -8, 12] },
              transition: { duration: 4, repeat: Infinity },
              className: "absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full",
              children: r.sticker
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-6", children: r.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider opacity-70", children: r.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold leading-tight", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm opacity-80 leading-relaxed", children: r.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm font-bold border-b border-current pb-0.5 group-hover:gap-3 transition-all", children: [
            r.cta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute bottom-6 right-6 w-6 h-6 opacity-40" })
        ]
      },
      i
    )) })
  ] }) });
}
function Footer() {
  const cols = [
    { title: "Product", links: ["Pay & Benefits", "Equity", "Compliance", "Time Off", "API"] },
    { title: "Resources", links: ["Pricing", "Blog", "Customers", "Help Center", "Newsletter"] },
    { title: "Company", links: ["About", "Careers", "Press", "Partners", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative bg-foreground text-background pt-20 pb-10 px-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-10 pb-16 border-b border-background/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-black text-2xl", children: [
          "people",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-background/60", children: "Built by humans, for humans rebuilding work." })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase tracking-wider text-primary mb-4", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-background/70 hover:text-primary transition-colors", children: l }) }, l)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        className: "pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h2",
            {
              className: "font-black tracking-tighter leading-[0.8]",
              style: { fontSize: "clamp(4rem, 14vw, 12rem)" },
              children: [
                "people",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-background/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Squiggle, { className: "w-20 h-4 text-primary mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 People Builders. All rights reserved." })
          ] })
        ]
      }
    )
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyJoin, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MidCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShineCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Resources, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
