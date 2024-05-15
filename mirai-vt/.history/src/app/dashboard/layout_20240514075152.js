// /app/dashboard/layout.js

import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/about">About</Link>
        <Link href="/dashboard/contact">Contact</Link>
        <Link href="/dashboard/services">Services</Link>
        {/* Add your dashboard-specific layout here */}
        {children}
      </div>
    );
  }