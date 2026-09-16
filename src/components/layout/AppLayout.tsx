
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import './AppLayout.css'

interface AppLayoutProps {
  children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-sidebar__brand">
          <div className="app-sidebar__logo">CA</div>

          <div>
            <div className="app-sidebar__title">Attendance</div>
            <div className="app-sidebar__subtitle">Management System</div>
          </div>
        </div>

        <nav className="app-sidebar__nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Students</span>
          </NavLink>

          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Teachers</span>
          </NavLink>

          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Attendance</span>
          </NavLink>

          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Subjects</span>
          </NavLink>

          <NavLink
            to="/timetable"
            className={({ isActive }) =>
              `app-sidebar__link ${
                isActive ? 'app-sidebar__link--active' : ''
              }`
            }
          >
            <span>Timetable</span>
          </NavLink>
        </nav>

        <div className="app-sidebar__footer">
          <span>College Attendance</span>
          <span>Management System</span>
        </div>
      </aside>

      <div className="app-layout__main">
        <header className="app-header">
          <div className="app-header__inner">
            <div>
              <p className="app-header__eyebrow">College Portal</p>
              <h1 className="app-header__title">
                College Attendance Management System
              </h1>
            </div>
          </div>
        </header>

        <main className="app-main">
          <div className="app-main__content">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default AppLayout
