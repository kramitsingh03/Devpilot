import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

const titleMap = {
  '/app/dashboard': ['Dashboard', "Here's what's happening with your projects."],
  '/app/projects': ['Projects', 'Manage and analyze your connected repositories.'],
  '/app/projects/new': ['Add Project', 'Connect a GitHub repository to get started.'],
  '/app/projects/analysis': ['Repository Analysis', 'Automatic code analysis and indexing.'],
  '/app/projects/overview': ['Project Overview', 'Repository insights and analytics.'],
  '/app/assistant': ['AI Assistant', 'Ask anything about your codebase.'],
  '/app/tests': ['Test Generation', 'Generate and run automated tests with AI.'],
  '/app/tests/results': ['Test Results & Analysis', 'View results and AI-powered failure analysis.'],
  '/app/deployments': ['CI/CD & Deployments', 'Automate builds and deployments.'],
  '/app/monitoring': ['Monitoring & Observability', 'Track performance and usage.'],
  '/app/settings': ['Settings', 'Manage your account and preferences.'],
}

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const [title, subtitle] = titleMap[location.pathname] || ['DevPilot', '']

  return (
    <div className="min-h-screen bg-base-900 flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar title={title} subtitle={subtitle} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 px-4 sm:px-6 py-6 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
