'use client';
import { BrowserRouter, Routes, Route } from '@remix-run/react';

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add your components here */}
    </div>
  );
}
