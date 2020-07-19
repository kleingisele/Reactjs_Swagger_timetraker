import Materials from './pages/Materials'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import Splash from './pages/Splash'
import TimeReports from './pages/TimeReports'
import Workers from './pages/Workers'

export const urls = {
  workers: '/workers',
  timeReports: '/reports/time',
  materials: '/materials',
  projects: '/projects',
  signIn: '/sign-in',
  root: '/'
}

export const routes = [
  { url: urls.workers, content: Workers, isAuthenticated: true },
  { url: urls.timeReports, content: TimeReports, isAuthenticated: true },
  { url: urls.materials, content: Materials, isAuthenticated: true },
  { url: urls.projects, content: Projects, isAuthenticated: true },
  { url: urls.signIn, content: SignIn, isAuthenticated: false },
  { url: urls.root, content: Splash, isAuthenticated: false },
]
