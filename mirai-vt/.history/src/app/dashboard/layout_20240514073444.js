// /app/dashboard/layout.js

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <h1>Hello</h1>
        {/* Add your dashboard-specific layout here */}
        {children}
      </div>
    );
  }