
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

function HomePage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>College Attendance Management System dashboard will be implemented here.</p>
    </div>
  )
}

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <p>Authentication page will be implemented here.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
