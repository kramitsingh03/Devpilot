export default function StatCard({ icon: Icon, label, value, accent = 'accent' }) {
  const accentMap = {
    accent: 'bg-accent/15 text-accent-light',
    cyan: 'bg-cyan/15 text-cyan',
    success: 'bg-success/15 text-success',
    warning: 'bg-warning/15 text-warning',
  }
  return (
    <div className="card flex items-center gap-3.5 min-w-0">
      {Icon && (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${accentMap[accent]}`}>
          <Icon size={18} />
        </div>
      )}
      <div className="min-w-0">
        <div className="text-xl font-bold text-white leading-tight truncate">{value}</div>
        <div className="text-xs text-base-50/50 truncate">{label}</div>
      </div>
    </div>
  )
}
