import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'

import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import AddProject from './pages/AddProject.jsx'
import RepoAnalysis from './pages/RepoAnalysis.jsx'
import ProjectOverview from './pages/ProjectOverview.jsx'
import AIAssistant from './pages/AIAssistant.jsx'
import TestGeneration from './pages/TestGeneration.jsx'
import TestResults from './pages/TestResults.jsx'
import Deployments from './pages/Deployments.jsx'
import Monitoring from './pages/Monitoring.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* App shell */}
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/new" element={<AddProject />} />
        <Route path="projects/analysis" element={<RepoAnalysis />} />
        <Route path="projects/overview" element={<ProjectOverview />} />
        <Route path="assistant" element={<AIAssistant />} />
        <Route path="tests" element={<TestGeneration />} />
        <Route path="tests/results" element={<TestResults />} />
        <Route path="deployments" element={<Deployments />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
