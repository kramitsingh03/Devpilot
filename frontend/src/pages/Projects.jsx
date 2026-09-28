import { Link } from 'react-router-dom'
import { Plus, Star, GitFork } from 'lucide-react'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { projects } from '../data/mockData.js'

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-base-50/50">{projects.length} projects connected</p>
        <Link to="/app/projects/new" className="btn-primary text-sm">
          <Plus size={16} /> Add Project
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <Link key={p.id} to="/app/projects/overview" className="card hover:border-accent/50 transition block">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white truncate">{p.name}</h3>
              <span className="text-sm font-bold text-accent-light">{p.passRate}%</span>
            </div>
            <p className="text-xs text-base-50/45 truncate mb-3">{p.repo}</p>
            <ProgressBar value={p.passRate} className="mb-3" />
            <div className="flex items-center justify-between text-xs text-base-50/40">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Star size={12} /> 158k</span>
                <span className="flex items-center gap-1"><GitFork size={12} /> 32k</span>
              </span>
              <span>{p.lastAnalyzed}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
