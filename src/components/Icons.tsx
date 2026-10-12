type IconProps = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

/* ---- Practice area icons (keyed by Area.icon) ---- */
export function AreaIcon({ name, size = 28, className }: { name: string } & IconProps) {
  const p = base(size, className);
  switch (name) {
    case "shield":
      return (<svg {...p}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /></svg>);
    case "scale":
      return (<svg {...p}><path d="M12 3v18M7 21h10M6 7h12M6 7l-3 6h6zM18 7l-3 6h6z" /></svg>);
    case "heart":
      return (<svg {...p}><path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z" /></svg>);
    case "briefcase":
      return (<svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>);
    case "users":
      return (<svg {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-1-5.8M21 20a6 6 0 0 0-5-5.9" /></svg>);
    case "home":
      return (<svg {...p}><path d="M4 11l8-7 8 7M6 10v9h12v-9M10 19v-5h4v5" /></svg>);
    case "receipt":
      return (<svg {...p}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" /></svg>);
    case "bulb":
      return (<svg {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.3-1 2.5H9c0-1.2-.3-1.8-1-2.5A6 6 0 0 1 12 3z" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="9" /></svg>);
  }
}

/* ---- Generic UI icons ---- */
export const IconStar = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
  </svg>
);
export const IconArrow = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconPhone = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const IconMail = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const IconPin = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const IconClock = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconBook = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2zM20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z" /></svg>
);
export const IconSearch = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
);
export const IconClose = ({ size = 22, className }: IconProps) => (
  <svg {...base(size, className)}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

/* ---- Social icons ---- */
export function SocialIcon({ name, size = 18, className }: { name: string } & IconProps) {
  const p = base(size, className);
  switch (name) {
    case "telegram":
      return (<svg {...p}><path d="M21 4L3 11l5 2 2 6 3-4 5 4z" /></svg>);
    case "instagram":
      return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>);
    case "facebook":
      return (<svg {...p}><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1z" /></svg>);
    case "youtube":
      return (<svg {...p}><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="9" /></svg>);
  }
}
