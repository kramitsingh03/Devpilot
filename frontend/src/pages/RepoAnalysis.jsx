import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Github, Star, GitFork, CheckCircle2, Loader2, Circle } from 'lucide-react'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { languageDistribution, repoStructure } from '../data/mockData.js'

const pipeline = ['Cloning repository', 'Parsing files', 'Analyzing structure', 'Generating embeddings', 'Storing in vector database', 'Generating summary']

export default function RepoAnalysis() {
  const [progress, setProgress] = useState(60)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => Math.min(100, p + 4)), 400)
    return () => clearInterval(t)
  }, [])

  const doneCount = Math.floor((progress / 100) * pipeline.length)

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-base-600 flex items-center justify-center shrink-0">
              <Github size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">microsoft/vscode</h3>
                <span className="pill bg-base-600/60 text-base-50/60">Public</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-base-50/50 mt-1">
                <span className="flex items-center gap-1"><Star size={12} /> 158k</span>
                <span className="flex items-center gap-1"><GitFork size={12} /> 32k</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/app/projects/overview')}
            className="btn-secondary text-sm"
            disabled={progress < 100}
          >
            View Repository →
          </button>
        </div>

        <ProgressBar value={progress} className="mb-2" />
        <p className="text-xs text-base-50/45">{progress < 100 ? 'This may take a few minutes.' : 'Analysis complete.'}</p>

        <div className="mt-5 space-y-2.5">
          {pipeline.map((step, i) => (
            <div key={step} className="flex items-center gap-2.5 text-sm">
              {i < doneCount ? (
                <CheckCircle2 size={16} className="text-success shrink-0" />
              ) : i === doneCount ? (
                <Loader2 size={16} className="text-accent-light animate-spin shrink-0" />
              ) : (
                <Circle size={16} className="text-base-50/25 shrink-0" />
              )}
              <span className={i < doneCount ? 'text-base-50/80' : i === doneCount ? 'text-white font-medium' : 'text-base-50/40'}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="card">
          <h3 className="font-semibold text-white mb-4">Language Distribution</h3>
          <div className="h-2.5 rounded-full overflow-hidden flex mb-4">
            {languageDistribution.map((l) => (
              <div key={l.name} style={{ width: `${l.value}%`, backgroundColor: l.color }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languageDistribution.map((l) => (
              <div key={l.name} className="flex items-center gap-2 text-sm text-base-50/70">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: l.color }} />
                {l.name} <span className="text-base-50/40 ml-auto">{l.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-white mb-4">Repository Structure</h3>
          <pre className="text-sm font-mono text-base-50/60 leading-relaxed whitespace-pre-wrap">
            {repoStructure.join('\n')}
          </pre>
        </div>
      </div>
    </div>
  )
}
