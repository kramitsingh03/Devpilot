import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, GitFork, Users, Code2, GitCommit } from 'lucide-react'
import StatCard from '../components/ui/StatCard.jsx'
import { repoStructure, recentCommits } from '../data/mockData.js'

const tabs = ['Overview', 'Files', 'Commits', 'Tech Stack']

export default function ProjectOverview() {
  const [tab, setTab] = useState('Overview')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">microsoft/vscode</h2>
          <p className="text-sm text-base-50/50">Visual Studio Code — a source-code editor made by Microsoft.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/app/tests" className="btn-secondary text-sm">Generate Tests</Link>
          <Link to="/app/assistant" className="btn-primary text-sm">Ask AI</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard icon={Star} label="Stars" value="218k" />
        <StatCard icon={GitFork} label="Forks" value="32k" accent="cyan" />
        <StatCard icon={Users} label="Contributors" value="1.9K" accent="success" />
        <StatCard icon={Code2} label="Tech Stack" value="8.2K files" accent="warning" />
      </div>

      <div className="border-b border-base-600/40 flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition shrink-0
              ${tab === t ? 'border-accent text-white' : 'border-transparent text-base-50/50 hover:text-white'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="card">
          <p className="text-sm text-base-50/60 leading-relaxed">
            TypeScript makes up 68.2% of the codebase, followed by JavaScript at 20.1%. This is a large,
            actively maintained repository with a modular extension architecture under <code className="text-cyan">src/</code>.
          </p>
        </div>
      )}

      {tab === 'Files' && (
        <div className="card">
          <pre className="text-sm font-mono text-base-50/60 leading-relaxed whitespace-pre-wrap">{repoStructure.join('\n')}</pre>
        </div>
      )}

      {tab === 'Commits' && (
        <div className="card space-y-3">
          {recentCommits.map((c) => (
            <div key={c.hash} className="flex items-center gap-3 pb-3 border-b border-base-600/30 last:border-0 last:pb-0">
              <GitCommit size={16} className="text-accent-light shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-white truncate">{c.msg}</p>
                <p className="text-xs text-base-50/40">{c.hash} · {c.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'Tech Stack' && (
        <div className="card grid sm:grid-cols-3 gap-4 text-sm">
          {['TypeScript', 'JavaScript', 'Electron', 'React', 'Node.js', 'Webpack'].map((t) => (
            <div key={t} className="pill bg-base-600/50 text-base-50/70 justify-center py-2">{t}</div>
          ))}
        </div>
      )}
    </div>
  )
}
