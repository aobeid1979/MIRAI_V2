// /app/dashboard/layout.js

import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        
        
        
        {/* Add your dashboard-specific layout here */}
        {children}
      </div>
    );
  }