import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Code, Bot, Server, Layers } from 'lucide-react'
import Logo from '../components/ui/Logo.jsx'

const steps = ['Welcome', 'Profile', 'Preferences', 'Complete']

const interests = [
  { key: 'web', label: 'Web Development', icon: Code },
  { key: 'testing', label: 'Automation Testing', icon: Layers },
  { key: 'devops', label: 'DevOps', icon: Server },
  { key: 'ai', label: 'AI / LLMs', icon: Bot },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [role, setRole] = useState('Software Engineer')
  const [selected, setSelected] = useState(['ai'])
  const navigate = useNavigate()

  const toggleInterest = (key) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]))

  const next = () => {
    if (step === steps.length - 1) navigate('/app/dashboard')
    else setStep((s) => s + 1)
  }

  return (
    <div className="min-h-screen bg-base-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-8"><Logo /></div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0
                ${i < step ? 'bg-success text-white' : i === step ? 'bg-accent text-white' : 'bg-base-600 text-base-50/50'}`}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className={`h-px flex-1 ${i < step ? 'bg-success' : 'bg-base-600'}`} />}
            </div>
          ))}
        </div>

        <div className="panel p-6 sm:p-8">
          {step === 0 && (
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent-light flex items-center justify-center mx-auto mb-5">
                <Bot size={28} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Let's get you started!</h2>
              <p className="text-sm text-base-50/50">Tell us a bit about yourself so we can personalize your experience.</p>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white mb-1">Your profile</h2>
              <div>
                <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Amit Kumar" className="input-field" />
              </div>
              <div>
                <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
                  <option>Software Engineer</option>
                  <option>QA Engineer</option>
                  <option>DevOps Engineer</option>
                  <option>Engineering Manager</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-white mb-1">Primary interests</h2>
              <p className="text-sm text-base-50/50 mb-5">Select all that apply.</p>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ key, label, icon: Icon }) => {
                  const active = selected.includes(key)
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleInterest(key)}
                      className={`flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition
                        ${active ? 'border-accent bg-accent/10' : 'border-base-600/60 hover:border-base-500'}`}
                    >
                      <Icon size={18} className={active ? 'text-accent-light' : 'text-base-50/50'} />
                      <span className="text-sm font-medium text-white">{label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-success/15 text-success flex items-center justify-center mx-auto mb-5">
                <Check size={28} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">You're all set!</h2>
              <p className="text-sm text-base-50/50">"Analyze. Automate. Build better." Let's connect your first repository.</p>
            </div>
          )}

          <button onClick={next} className="btn-primary w-full py-2.5 mt-8">
            {step === steps.length - 1 ? 'Go to Dashboard' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
