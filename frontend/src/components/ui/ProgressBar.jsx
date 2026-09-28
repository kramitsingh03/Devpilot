export default function ProgressBar({ value = 0, className = '', barClassName = '' }) {
  return (
    <div className={`w-full h-1.5 rounded-full bg-base-600/60 overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r from-accent to-cyan transition-all duration-500 ${barClassName}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
