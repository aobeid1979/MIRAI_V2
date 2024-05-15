'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return <h1>Welcome to the Home Page</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
