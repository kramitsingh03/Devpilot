export const user = {
  name: 'Amit Kumar',
  email: 'amit@example.com',
  role: 'Software Engineer',
  initials: 'AK',
}

export const projects = [
  {
    id: 'awesome-project',
    name: 'awesome-project',
    repo: 'github.com/user/awesome-project',
    lastAnalyzed: '2 hours ago',
    passRate: 78,
  },
  {
    id: 'ecommerce-app',
    name: 'ecommerce-app',
    repo: 'github.com/user/ecommerce',
    lastAnalyzed: '1 day ago',
    passRate: 92,
  },
  {
    id: 'portfolio-site',
    name: 'portfolio-site',
    repo: 'github.com/user/portfolio-site',
    lastAnalyzed: '3 days ago',
    passRate: 85,
  },
]

export const recentActivity = [
  { text: 'Test run completed for awesome-project', time: '10 min ago', status: 'success' },
  { text: 'Repository analysis completed', time: '1 hour ago', status: 'success' },
  { text: 'New commit detected in ecommerce-app', time: '3 hours ago', status: 'info' },
]

export const dashboardStats = [
  { label: 'Projects', value: 3 },
  { label: 'Test Runs', value: 24 },
  { label: 'Avg Pass Rate', value: '92%' },
  { label: 'Active Analyses', value: 4 },
]

export const repoStructure = [
  'src/',
  '  extensions/',
  '  test/',
  '  docs/',
  'package.json',
  'tsconfig.json',
  'README.md',
]

export const languageDistribution = [
  { name: 'TypeScript', value: 68.2, color: '#3ddcd7' },
  { name: 'JavaScript', value: 20.1, color: '#f5b855' },
  { name: 'CSS', value: 5.3, color: '#7c6cf6' },
  { name: 'Other', value: 6.4, color: '#454e80' },
]

export const recentCommits = [
  { msg: 'Improve auth flow', hash: 'a18e56', time: '2 hours ago' },
  { msg: 'Fix test cases', hash: 'd54e16', time: '5 hours ago' },
  { msg: 'Update dependencies', hash: 'f9a231', time: '1 day ago' },
]

export const chatMessages = [
  {
    role: 'user',
    text: 'Explain the authentication flow in this project.',
  },
  {
    role: 'assistant',
    title: 'Authentication Flow',
    text: "Here's how authentication works in this repository:",
    steps: [
      'User logs in through the web interface',
      'Request is handled by authController.ts',
      'JWT token is generated in authService.ts',
      'Token is stored in database via userRepository',
      'Middleware validates the token for protected routes',
    ],
    relatedFiles: [
      'src/controllers/authController.ts',
      'src/services/authService.ts',
      'src/middleware/authMiddleware.ts',
      'src/repositories/userRepository.ts',
    ],
  },
]

export const generatedTestCases = [
  { name: 'Valid login test', checked: true },
  { name: 'Invalid password test', checked: true },
  { name: 'Empty username test', checked: true },
  { name: 'Token expiration test', checked: true },
  { name: 'Refresh token test', checked: false },
  { name: 'Logout test', checked: true },
  { name: 'Session persistence test', checked: false },
  { name: 'Invalid token test', checked: true },
]

export const testResults = {
  runId: '#104',
  projectName: 'Login Page Tests',
  date: 'Sep 20, 2025, 10:24 AM',
  status: 'Completed',
  passRate: 79,
  total: 24,
  passed: 19,
  failed: 4,
  skipped: 1,
  cases: [
    { name: 'Valid login test', status: 'passed', duration: '0.8s' },
    { name: 'Invalid password test', status: 'passed', duration: '0.6s' },
    { name: 'Empty username test', status: 'failed', duration: '0.5s' },
    { name: 'Token expiration test', status: 'passed', duration: '1.2s' },
    { name: 'Logout test', status: 'failed', duration: '1.4s' },
  ],
  failureAnalysis: {
    rootCause: 'Login button ID changed from #login-submit to #submit-login in commit a1b2c3.',
    affectedTest: 'LoginTest.testValidLogin()',
    recommendedAction: 'Update selector in LoginPage.js',
    confidence: 87,
  },
}

export const pipelineSteps = [
  { name: 'Checkout code', status: 'success', duration: '10s' },
  { name: 'Install dependencies', status: 'success', duration: '38s' },
  { name: 'Run lint', status: 'success', duration: '12s' },
  { name: 'Run tests', status: 'success', duration: '42s' },
  { name: 'Build Docker image', status: 'success', duration: '28s' },
  { name: 'Push to registry', status: 'success', duration: '15s' },
  { name: 'Deploy to Kubernetes', status: 'success', duration: '30s' },
]

export const monitoringStats = [
  { label: 'API Latency', value: '120 ms' },
  { label: 'Request Count', value: '12.4K' },
  { label: 'Error Rate', value: '0.8%' },
  { label: 'Token Usage', value: '18.6K' },
]

export const apiLatencyTrend = [
  { day: 'Sep 14', value: 118 }, { day: 'Sep 16', value: 132 }, { day: 'Sep 18', value: 108 },
  { day: 'Sep 20', value: 141 }, { day: 'Sep 22', value: 120 }, { day: 'Sep 24', value: 126 },
]

export const requestCountTrend = [
  { day: 'Sep 14', value: 9200 }, { day: 'Sep 16', value: 10400 }, { day: 'Sep 18', value: 8800 },
  { day: 'Sep 20', value: 12400 }, { day: 'Sep 22', value: 11100 }, { day: 'Sep 24', value: 12800 },
]

export const aiUsageTrend = [
  { day: 'Sep 14', value: 210 }, { day: 'Sep 16', value: 260 }, { day: 'Sep 18', value: 190 },
  { day: 'Sep 20', value: 300 }, { day: 'Sep 22', value: 250 }, { day: 'Sep 24', value: 280 },
]

export const testRunsTrend = [
  { day: 'Sep 14', passed: 18, failed: 4 }, { day: 'Sep 16', passed: 20, failed: 3 },
  { day: 'Sep 18', passed: 15, failed: 6 }, { day: 'Sep 20', passed: 22, failed: 2 },
  { day: 'Sep 22', passed: 19, failed: 4 }, { day: 'Sep 24', passed: 24, failed: 1 },
]
