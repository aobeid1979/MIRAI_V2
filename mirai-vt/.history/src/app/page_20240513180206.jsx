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

const routes = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>Hello</h1>} />)
);

export default function Home() {
  return <RouterProvider routes={routes} />;
}
