import { CheckCircle2, ExternalLink, Github, Container, Boxes, Rocket } from 'lucide-react'
import { pipelineSteps } from '../data/mockData.js'

const services = [
  { name: 'Frontend', tag: 'React', color: 'bg-cyan/15 text-cyan' },
  { name: 'Backend', tag: 'FastAPI', color: 'bg-success/15 text-success' },
  { name: 'AI Service', tag: 'LangGraph', color: 'bg-accent/15 text-accent-light' },
  { name: 'Worker', tag: 'Selenium', color: 'bg-warning/15 text-warning' },
]

export default function Deployments() {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2">
            <Github size={16} className="text-base-50/50" />
            <span className="text-sm text-base-50/70">git push origin main</span>
          </div>
          <a href="#deployment" className="text-sm text-accent-light flex items-center gap-1 hover:underline">
            https://vscode.devpilot.app <ExternalLink size={14} />
          </a>
        </div>

        {/* Pipeline steps */}
        <div className="flex items-center overflow-x-auto pb-2">
          {pipelineSteps.map((step, i) => (
            <div key={step.name} className="flex items-center shrink-0">
              <div className="flex flex-col items-center gap-1.5 w-28">
                <div className="w-9 h-9 rounded-full bg-success/15 text-success flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs text-base-50/70 text-center leading-tight">{step.name}</span>
                <span className="text-[11px] text-base-50/35">{step.duration}</span>
              </div>
              {i < pipelineSteps.length - 1 && <div className="h-px w-8 bg-success/40 shrink-0 -mt-6" />}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-base-600/30 flex items-center gap-2 text-sm text-success font-medium">
          <CheckCircle2 size={16} /> Deployed successfully to production
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.name} className="card">
            <div className="w-9 h-9 rounded-lg bg-base-600/60 flex items-center justify-center mb-3">
              <Container size={16} className="text-base-50/60" />
            </div>
            <h4 className="font-semibold text-white text-sm">{s.name}</h4>
            <span className={`pill mt-2 ${s.color}`}>{s.tag}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Boxes size={18} className="text-accent-light" />
          <h3 className="font-semibold text-white">Infrastructure</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          {[
            ['Docker Compose', 'Local development environment'],
            ['Kubernetes', 'Production deployment — scalable'],
            ['Ingress / Load Balancer', 'Routes traffic across services'],
          ].map(([title, desc]) => (
            <div key={title} className="p-3.5 rounded-lg bg-base-800/60 border border-base-600/30">
              <div className="flex items-center gap-2 mb-1">
                <Rocket size={14} className="text-cyan" />
                <span className="font-medium text-white">{title}</span>
              </div>
              <p className="text-xs text-base-50/45">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
