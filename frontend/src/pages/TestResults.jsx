import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { CheckCircle2, XCircle, MinusCircle, AlertTriangle, FileCode, GitCommit } from 'lucide-react'
import Badge from '../components/ui/Badge.jsx'
import { testResults } from '../data/mockData.js'

const pieData = [
  { name: 'Passed', value: testResults.passed, color: '#3fd68c' },
  { name: 'Failed', value: testResults.failed, color: '#f2617a' },
  { name: 'Skipped', value: testResults.skipped, color: '#454e80' },
]

const statusMap = {
  passed: { icon: CheckCircle2, color: 'text-success', variant: 'success' },
  failed: { icon: XCircle, color: 'text-danger', variant: 'danger' },
  skipped: { icon: MinusCircle, color: 'text-base-50/40', variant: 'neutral' },
}

export default function TestResults() {
  const r = testResults
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">Test Run {r.runId} — {r.projectName}</h2>
          <p className="text-sm text-base-50/45">Started at {r.date}</p>
        </div>
        <Badge variant="success" dot>{r.status}</Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Donut */}
        <div className="card flex flex-col items-center justify-center">
          <div className="w-40 h-40 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={52} outerRadius={70} paddingAngle={2} dataKey="value">
                  {pieData.map((d) => <Cell key={d.name} fill={d.color} stroke="none" />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-white">{r.passRate}%</span>
              <span className="text-xs text-base-50/40">pass rate</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-xs">
            {pieData.map((d) => (
              <span key={d.name} className="flex items-center gap-1.5 text-base-50/60">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} /> {d.name} {d.value}
              </span>
            ))}
          </div>
          <p className="text-xs text-base-50/40 mt-2">{r.total} total tests</p>
        </div>

        {/* Test cases */}
        <div className="lg:col-span-2 card">
          <h3 className="font-semibold text-white mb-4">Test Cases</h3>
          <div className="space-y-1">
            {r.cases.map((c) => {
              const S = statusMap[c.status]
              const Icon = S.icon
              return (
                <div key={c.name} className="flex items-center gap-3 py-2 border-b border-base-600/25 last:border-0">
                  <Icon size={16} className={`${S.color} shrink-0`} />
                  <span className="text-sm text-base-50/80 flex-1 truncate">{c.name}</span>
                  <span className="text-xs text-base-50/40">{c.duration}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* AI Failure Analysis */}
      <div className="card border-warning/30">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-warning" />
          <h3 className="font-semibold text-white">AI Failure Analysis</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div>
            <p className="text-base-50/40 text-xs mb-1">Root cause</p>
            <p className="text-base-50/80">{r.failureAnalysis.rootCause}</p>
          </div>
          <div>
            <p className="text-base-50/40 text-xs mb-1">Affected test</p>
            <p className="text-cyan font-mono flex items-center gap-1.5"><FileCode size={14} /> {r.failureAnalysis.affectedTest}</p>
          </div>
          <div>
            <p className="text-base-50/40 text-xs mb-1">Recommended action</p>
            <p className="text-base-50/80">{r.failureAnalysis.recommendedAction}</p>
          </div>
          <div>
            <p className="text-base-50/40 text-xs mb-1">Confidence</p>
            <Badge variant="success">{r.failureAnalysis.confidence}%</Badge>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-base-50/40 mt-4 pt-4 border-t border-base-600/30">
          <GitCommit size={12} /> Linked to commit a1b2c3
        </div>
      </div>
    </div>
  )
}
