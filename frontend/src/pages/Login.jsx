import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Github, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Logo from '../components/ui/Logo.jsx'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/app/dashboard')
  }

  return (
    <div className="min-h-screen bg-base-900 grid lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12">
        <div className="w-full max-w-sm mx-auto">
          <Logo />
          <h2 className="text-2xl font-bold text-white mt-8 mb-1">Welcome back</h2>
          <p className="text-sm text-base-50/50 mb-7">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Email address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-50/40" />
                <input type="email" required placeholder="amit@example.com" className="input-field pl-9" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-base-50/80">Password</label>
                <a href="#forgot" className="text-xs text-accent-light hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-50/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="input-field pl-9 pr-9"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-50/40 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-2.5">Sign In</button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-base-600/50 flex-1" />
            <span className="text-xs text-base-50/40">or continue with</span>
            <div className="h-px bg-base-600/50 flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={handleSubmit} className="btn-secondary">
              <Github size={16} /> GitHub
            </button>
            <button type="button" onClick={handleSubmit} className="btn-secondary">
              Google
            </button>
          </div>

          <p className="text-center text-sm text-base-50/50 mt-7">
            Don't have an account?{' '}
            <Link to="/onboarding" className="text-accent-light font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right: visual panel */}
      <div className="hidden lg:flex flex-col justify-center px-12 bg-gradient-to-br from-base-800 via-base-900 to-accent-dark/20 border-l border-base-600/30 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-cyan/10 blur-3xl" />
        <div className="relative">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Build. Analyze.<br />Test. Deploy.
          </h3>
          <p className="text-base-50/60 max-w-sm">
            DevPilot connects your GitHub repository and gives you AI-powered code analysis,
            automated testing, documentation, and more — all in one platform.
          </p>
        </div>
      </div>
    </div>
  )
}
