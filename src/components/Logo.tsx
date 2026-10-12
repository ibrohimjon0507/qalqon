type Props = {
  size?: number;
  className?: string;
};

/** QALQON — qalqon (shield) ichida adolat tarozisi */
export default function Logo({ size = 40, className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* shield */}
      <path
        d="M50 8 L84 20 V48 C84 70 69 84 50 92 C31 84 16 70 16 48 V20 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* inner shield line */}
      <path
        d="M50 16 L77 25 V47 C77 65 65 77 50 84 C35 77 23 65 23 47 V25 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* balance scale: beam */}
      <path d="M34 40 H66" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      {/* center post */}
      <path d="M50 34 V64" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="50" cy="32" r="3.2" fill="currentColor" />
      {/* base */}
      <path d="M42 66 H58" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      {/* left pan */}
      <path d="M34 40 L29 52 H39 Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      {/* right pan */}
      <path d="M66 40 L61 52 H71 Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  );
}
