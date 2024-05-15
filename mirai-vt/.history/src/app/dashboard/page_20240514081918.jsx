// /app/dashboard/page.jsx

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <Link href="/dashboard/about">About</Link>
    </>
  );
}
