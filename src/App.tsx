import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import PageHeader from "./components/ui/PageHeader";
import StatCard from "./components/ui/StatCard";
import SectionCard from "./components/ui/SectionCard";

function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your college attendance management system."
      />
      <div className="dashboard-stats">
        <StatCard
          label="Students"
          value="1,248"
          description="Total registered students"
        />

        <StatCard
          label="Teachers"
          value="86"
          description="Active teaching staff"
        />

        <StatCard
          label="Attendance"
          value="87.4%"
          description="Overall attendance"
        />

        <StatCard label="Subjects" value="42" description="Active subjects" />

        <SectionCard
          title="Recent Attendance"
          description="Latest attendance activity across your college."
        >
          <div className="recent-attendance-list">
            <div className="recent-attendance-item">
              <div>
                <strong>Data Structures</strong>
                <p>Class 3A · Today, 10:00 AM</p>
              </div>

              <span>92%</span>
            </div>

            <div className="recent-attendance-item">
              <div>
                <strong>Database Management</strong>
                <p>Class 3A · Today, 11:00 AM</p>
              </div>

              <span>86%</span>
            </div>

            <div className="recent-attendance-item">
              <div>
                <strong>Operating Systems</strong>
                <p>Class 3A · Yesterday, 2:00 PM</p>
              </div>

              <span>89%</span>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function StudentsPage() {
  return (
    <div>
      <PageHeader
        title="Students"
        description="Manage and view student information."
      />
    </div>
  );
}

function TeachersPage() {
  return (
    <div>
      <PageHeader
        title="Teachers"
        description="Manage and view teacher information."
      />
    </div>
  );
}

function AttendancePage() {
  return (
    <div>
      <PageHeader
        title="Attendance"
        description="Monitor and manage attendance records."
      />
    </div>
  );
}

function SubjectsPage() {
  return (
    <div>
      <PageHeader
        title="Subjects"
        description="Manage subjects and academic offerings."
      />
    </div>
  );
}

function TimetablePage() {
  return (
    <div>
      <PageHeader
        title="Timetable"
        description="View and manage the college timetable."
      />
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <p>Authentication page will be implemented here.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <DashboardPage />
            </AppLayout>
          }
        />

        <Route
          path="/students"
          element={
            <AppLayout>
              <StudentsPage />
            </AppLayout>
          }
        />

        <Route
          path="/teachers"
          element={
            <AppLayout>
              <TeachersPage />
            </AppLayout>
          }
        />

        <Route
          path="/attendance"
          element={
            <AppLayout>
              <AttendancePage />
            </AppLayout>
          }
        />

        <Route
          path="/subjects"
          element={
            <AppLayout>
              <SubjectsPage />
            </AppLayout>
          }
        />

        <Route
          path="/timetable"
          element={
            <AppLayout>
              <TimetablePage />
            </AppLayout>
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
