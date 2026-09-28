import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Github, Star, GitFork, Check } from 'lucide-react'

export default function AddProject() {
  const [url, setUrl] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const navigate = useNavigate()

  const handleFetch = (e) => {
    e.preventDefault()
    if (url.trim()) setShowPreview(true)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="card">
        <h3 className="font-semibold text-white mb-1">Connect your GitHub repository</h3>
        <p className="text-sm text-base-50/50 mb-5">Paste a repository URL to get started.</p>

        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://github.com/microsoft/vscode"
            className="input-field flex-1"
          />
          <button type="submit" className="btn-primary shrink-0">Fetch Repository</button>
        </form>

        {showPreview && (
          <div className="mt-5 p-4 rounded-lg bg-base-800/60 border border-base-600/40">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-base-600 flex items-center justify-center shrink-0">
                <Github size={20} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-white truncate">microsoft/vscode</h4>
                  <span className="pill bg-base-600/60 text-base-50/60">Public</span>
                </div>
                <p className="text-xs text-base-50/45 mt-0.5">Visual Studio Code</p>
                <div className="flex items-center gap-4 text-xs text-base-50/50 mt-2">
                  <span className="flex items-center gap-1"><Star size={12} /> 158k</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> 32k</span>
                  <span className="pill bg-cyan/15 text-cyan">TypeScript</span>
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-base-50/60">
              {['Repository access verified', 'Reading repository metadata', 'Setting up project...'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={14} className="text-success" /> {t}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/app/projects/analysis')}
              className="btn-primary w-full mt-5"
            >
              Connect Repository
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
