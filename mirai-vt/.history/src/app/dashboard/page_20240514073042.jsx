// /app/dashboard/page.jsx

import DashboardLayout from './layout';
import React from 'react';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <p>Dashboard Page</p>
      <Navbar />
    </DashboardLayout>
  );
}
