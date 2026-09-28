import { Menu, Bell, Search } from 'lucide-react'

export default function Topbar({ title, subtitle, onMenuClick, actions }) {
  return (
    <header className="sticky top-0 z-20 bg-base-900/90 backdrop-blur border-b border-base-600/40">
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
        <button onClick={onMenuClick} className="lg:hidden text-base-50/70 hover:text-white shrink-0">
          <Menu size={22} />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl font-bold text-white truncate">{title}</h1>
          {subtitle && <p className="text-xs sm:text-sm text-base-50/50 truncate">{subtitle}</p>}
        </div>

        <div className="hidden md:flex items-center gap-2 bg-base-800 border border-base-600/50 rounded-lg px-3 py-2 w-64">
          <Search size={16} className="text-base-50/40 shrink-0" />
          <input
            placeholder="Search..."
            className="bg-transparent text-sm text-base-50 placeholder:text-base-50/40 outline-none w-full"
          />
        </div>

        <button className="relative text-base-50/70 hover:text-white shrink-0">
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-danger" />
        </button>

        {actions}
      </div>
    </header>
  )
}
