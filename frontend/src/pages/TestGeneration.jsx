import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { generatedTestCases } from '../data/mockData.js'

export default function TestGeneration() {
  const [module, setModule] = useState('Authentication Module')
  const [testType, setTestType] = useState('unit')
  const [instructions, setInstructions] = useState('')
  const [cases, setCases] = useState(generatedTestCases)
  const [generated, setGenerated] = useState(true)
  const navigate = useNavigate()

  const toggle = (name) =>
    setCases((c) => c.map((t) => (t.name === name ? { ...t, checked: !t.checked } : t)))

  const checkedCount = cases.filter((c) => c.checked).length

  return (
    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
      <div className="card space-y-4 h-fit">
        <h3 className="font-semibold text-white">Generate Tests with AI</h3>
        <p className="text-sm text-base-50/50 -mt-2">Generate test cases based on your code and requirements.</p>

        <div>
          <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Select what to test</label>
          <select value={module} onChange={(e) => setModule(e.target.value)} className="input-field">
            <option>Authentication Module</option>
            <option>Payment Module</option>
            <option>User Profile Module</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Test type</label>
          <div className="flex gap-2">
            {[['unit', 'Unit Tests'], ['e2e', 'E2E Tests (Selenium)']].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setTestType(val)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm border transition
                  ${testType === val ? 'border-accent bg-accent/10 text-white' : 'border-base-600/60 text-base-50/60 hover:border-base-500'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Additional instructions (optional)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={3}
            placeholder="Cover login, logout and token validation scenarios"
            className="input-field resize-none"
          />
        </div>

        <button onClick={() => setGenerated(true)} className="btn-primary w-full">
          <Sparkles size={16} /> Generate Tests
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white">Generated Test Cases ({cases.length})</h3>
          <span className="text-xs text-base-50/45">{checkedCount} selected</span>
        </div>

        {!generated ? (
          <p className="text-sm text-base-50/40">Generate tests to see results here.</p>
        ) : (
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {cases.map((c) => (
              <label key={c.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-base-800/60 cursor-pointer">
                <input
                  type="checkbox"
                  checked={c.checked}
                  onChange={() => toggle(c.name)}
                  className="w-4 h-4 rounded accent-accent shrink-0"
                />
                <span className="text-sm text-base-50/80">{c.name}</span>
              </label>
            ))}
          </div>
        )}

        <button
          onClick={() => navigate('/app/tests/results')}
          disabled={checkedCount === 0}
          className="btn-secondary w-full mt-5 disabled:opacity-40"
        >
          ▶ Run {checkedCount} Test{checkedCount !== 1 ? 's' : ''}
        </button>
      </div>
    </div>
  )
}
