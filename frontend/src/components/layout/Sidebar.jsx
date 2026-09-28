import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, FolderKanban, Sparkles, FlaskConical, GitBranch,
  Activity, Settings, X,
} from 'lucide-react'
import Logo from '../ui/Logo.jsx'
import { user } from '../../data/mockData.js'

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/app/projects', label: 'Projects', icon: FolderKanban },
  { to: '/app/assistant', label: 'AI Assistant', icon: Sparkles },
  { to: '/app/tests', label: 'Test Runs', icon: FlaskConical },
  { to: '/app/deployments', label: 'Deployments', icon: GitBranch },
  { to: '/app/monitoring', label: 'Monitoring', icon: Activity },
  { to: '/app/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 shrink-0 bg-base-800 border-r border-base-600/40
        flex flex-col z-40 transition-transform duration-300 ease-out
        ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-base-600/40">
          <Logo size="sm" />
          <button onClick={onClose} className="lg:hidden text-base-50/60 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                ${isActive
                  ? 'bg-accent/15 text-accent-light'
                  : 'text-base-50/60 hover:text-white hover:bg-base-600/40'}`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-base-600/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-xs font-bold text-white shrink-0">
              {user.initials}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">{user.name}</div>
              <div className="text-xs text-base-50/50 truncate">{user.email}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
