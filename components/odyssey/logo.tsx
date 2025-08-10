export function OdysseyLogo({
  className = "h-7 w-auto",
  title = "Odyssey AI",
}: {
  className?: string
  title?: string
}) {
  // Clean geometric SVG mark + wordmark
  return (
    <svg className={className} viewBox="0 0 240 48" role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <linearGradient id="odysseyGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <g>
        <circle cx="24" cy="24" r="20" fill="url(#odysseyGrad)" opacity="0.95" />
        <path
          d="M24 10c7.732 0 14 6.268 14 14"
          stroke="#F8FAFC"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M24 38c-7.732 0-14-6.268-14-14"
          stroke="#F8FAFC"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </g>
      <g transform="translate(56, 10)">
        <text
          x="0"
          y="22"
          fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica"
          fontWeight="700"
          fontSize="22"
          letterSpacing="0.5"
          fill="#F8FAFC"
        >
          {"Odyssey "}
          <tspan fill="#10B981">AI</tspan>
        </text>
      </g>
    </svg>
  )
}
