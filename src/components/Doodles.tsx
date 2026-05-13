import { motion } from "framer-motion";

export const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 10 Q 12 0, 22 10 T 42 10 T 62 10 T 82 10 T 98 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2 L13.5 9 L21 10 L15 14.5 L17 22 L12 17.5 L7 22 L9 14.5 L3 10 L10.5 9 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export const ScribbleArrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 10 C 30 5, 60 50, 85 35"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M75 28 L 88 36 L 80 48"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const Lightning = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2 L4 14 L11 14 L9 22 L20 9 L13 9 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.3"
    />
  </svg>
);

export const Smiley = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="14" cy="16" r="1.5" fill="currentColor" />
    <circle cx="26" cy="16" r="1.5" fill="currentColor" />
    <path d="M12 23 Q 20 31, 28 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const Circle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <ellipse
      cx="50"
      cy="50"
      rx="45"
      ry="40"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      transform="rotate(-5 50 50)"
    />
  </svg>
);

export const Underline = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 12" fill="none">
    <path
      d="M3 8 Q 50 2, 100 6 T 197 4"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Blob = ({ className = "", color = "var(--color-primary)" }: { className?: string; color?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    animate={{
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
    }}
    transition={{ duration: 8, repeat: Infinity }}
  >
    <path
      fill={color}
      d="M44.7,-67.9C58.2,-60.5,69.5,-48.4,75.7,-34.1C81.9,-19.8,83,-3.4,79.6,11.6C76.2,26.6,68.3,40.2,57.4,50.7C46.5,61.2,32.5,68.5,17.4,72.3C2.3,76.1,-13.9,76.4,-28.5,71.4C-43.1,66.4,-56.1,56.1,-65.5,42.8C-74.9,29.5,-80.7,13.2,-79.5,-2.5C-78.3,-18.2,-70.1,-33.3,-58.9,-41.5C-47.7,-49.7,-33.5,-51.1,-21.1,-58.6C-8.7,-66.1,1.9,-79.6,14.6,-81.1C27.3,-82.6,42.1,-72.2,44.7,-67.9Z"
      transform="translate(100 100)"
    />
  </motion.svg>
);
