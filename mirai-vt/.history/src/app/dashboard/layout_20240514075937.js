// /app/dashboard/layout.js

import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <Link href="/dashboard">Home</Link>
        
        {/* Add your dashboard-specific layout here */}
        {children}
      </div>
    );
  }