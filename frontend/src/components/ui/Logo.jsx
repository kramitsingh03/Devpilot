import { Bot } from 'lucide-react'

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { box: 'w-7 h-7', icon: 14, text: 'text-lg' },
    md: { box: 'w-9 h-9', icon: 18, text: 'text-xl' },
    lg: { box: 'w-12 h-12', icon: 24, text: 'text-2xl' },
  }
  const s = sizes[size]
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${s.box} rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center shrink-0`}>
        <Bot size={s.icon} className="text-white" />
      </div>
      <span className={`${s.text} font-extrabold tracking-tight text-white`}>DevPilot</span>
    </div>
  )
}
