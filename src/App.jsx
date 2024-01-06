
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import EmployerDashboardPage from './components/EmployerDashobardPage';
import JobSeekerDashboardPage from './components/JobSeekerDashobardPage';
import { JobListingsProvider } from './contexts/JobListingsContext';
// import EmployerDashboardPage from './components/EmployerDashboardPage';
// import CheckoutPage from './components/CheckoutPage';

const App = () => {

  return (
    <>
    <JobListingsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/employer-dashboard' element={<EmployerDashboardPage />} />
            <Route path='/job-seeker-dashboard' element={<JobSeekerDashboardPage />} />

            {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
          </Routes>
        </Router>
    </JobListingsProvider>
      

    </>
  )
}

export default App
