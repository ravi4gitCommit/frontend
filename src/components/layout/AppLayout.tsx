import type { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <header>
        <h1>College Attendance Management System</h1>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default AppLayout