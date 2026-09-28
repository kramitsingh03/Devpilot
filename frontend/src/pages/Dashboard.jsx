import { Link } from 'react-router-dom'
import { FolderKanban, FlaskConical, TrendingUp, Activity, Plus, ArrowRight, CheckCircle2, GitCommit } from 'lucide-react'
import StatCard from '../components/ui/StatCard.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { projects, recentActivity, dashboardStats, user } from '../data/mockData.js'

const statIcons = [FolderKanban, FlaskConical, TrendingUp, Activity]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-white">Good morning, {user.name.split(' ')[0]} 👋</h2>
        <Link to="/app/projects/new" className="btn-primary text-sm">
          <Plus size={16} /> Create Project
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {dashboardStats.map((s, i) => (
          <StatCard key={s.label} icon={statIcons[i]} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent projects */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Recent Projects</h3>
            <Link to="/app/projects" className="text-xs text-accent-light hover:underline flex items-center gap-1">
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {projects.map((p) => (
              <Link
                key={p.id}
                to="/app/projects/overview"
                className="flex items-center justify-between gap-4 p-3.5 rounded-lg bg-base-800/60 hover:bg-base-800 border border-base-600/40 transition"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-white truncate">{p.name}</div>
                  <div className="text-xs text-base-50/45 truncate">{p.repo} · {p.lastAnalyzed}</div>
                  <ProgressBar value={p.passRate} className="mt-2 max-w-[180px]" />
                </div>
                <span className="text-sm font-semibold text-accent-light shrink-0">{p.passRate}%</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="card">
          <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {a.status === 'success'
                    ? <CheckCircle2 size={16} className="text-success" />
                    : <GitCommit size={16} className="text-accent-light" />}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-base-50/80 leading-snug">{a.text}</p>
                  <p className="text-xs text-base-50/40 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
