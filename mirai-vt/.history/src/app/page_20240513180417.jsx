'use client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from '@remix-run/react';
import { Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import CardHome from '@/components/CardHome';
import ImagesList from '@/components/ImagesList';
import Footer from '@/components/Footer';

let BrowserRouter = createBrowserRouter();
let routes = createRoutesFromElements([
  <Route path="/" element={<Home />} />,
  // Add more routes as needed
]);

export default function Home() {
  return (
    <BrowserRouter>
  <RouterProvider routes={routes} />;
  </BrowserRouter>
}
