import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Activity, Clock, AlertCircle, Zap } from 'lucide-react'
import StatCard from '../components/ui/StatCard.jsx'
import { monitoringStats, apiLatencyTrend, requestCountTrend, aiUsageTrend, testRunsTrend } from '../data/mockData.js'

const icons = [Clock, Activity, AlertCircle, Zap]

const tooltipStyle = {
  contentStyle: { background: '#1a1f36', border: '1px solid #343c63', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: '#f5f6fa' },
}

export default function Monitoring() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {monitoringStats.map((s, i) => (
          <StatCard key={s.label} icon={icons[i]} label={s.label} value={s.value} accent={['accent', 'cyan', 'warning', 'success'][i]} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="card">
          <h3 className="font-semibold text-white mb-4 text-sm">API Latency (ms)</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={apiLatencyTrend}>
                <CartesianGrid stroke="#252b47" vertical={false} />
                <XAxis dataKey="day" stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="value" stroke="#3ddcd7" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-white mb-4 text-sm">Request Count</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={requestCountTrend}>
                <CartesianGrid stroke="#252b47" vertical={false} />
                <XAxis dataKey="day" stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#7c6cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-white mb-4 text-sm">AI Usage (tokens, thousands)</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aiUsageTrend}>
                <CartesianGrid stroke="#252b47" vertical={false} />
                <XAxis dataKey="day" stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#f5b855" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-white mb-4 text-sm">Test Runs — Passed vs Failed</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={testRunsTrend}>
                <CartesianGrid stroke="#252b47" vertical={false} />
                <XAxis dataKey="day" stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5c6390" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="passed" stroke="#3fd68c" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="failed" stroke="#f2617a" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
