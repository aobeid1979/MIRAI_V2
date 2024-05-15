// /app/dashboard/layout.js

import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <Link href="/dashboard">Dashboard</Link>
        
        {/* Add your dashboard-specific layout here */}
        {children}
      </div>
    );
  }