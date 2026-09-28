const variants = {
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/15 text-danger',
  neutral: 'bg-base-500/40 text-base-50/70',
  accent: 'bg-accent/15 text-accent-light',
}

export default function Badge({ children, variant = 'neutral', dot = false }) {
  return (
    <span className={`pill ${variants[variant]}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
