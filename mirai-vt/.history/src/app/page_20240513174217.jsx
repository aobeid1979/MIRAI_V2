'use client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import CardHome from '@/components/CardHome';
import ImagesList from '@/components/ImagesList';
import Footer from '@/components/Footer';

const router = createRoutesFromElements(
  <Route path="/" element={<h1>Hello</h1>} />
);

export default function Home() {
  return;
  <RouterProvider routes={router} />;
}
