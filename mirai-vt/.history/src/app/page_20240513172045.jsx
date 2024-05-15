import {
  Route,
  createBrowserRoute,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import CardHome from '@/components/CardHome';
import ImagesList from '@/components/ImagesList';
import Footer from '@/components/Footer';

const router = createBrowserRoute(
  createRoutesFromElements(<Route index element={<Home />} />)
);

export default function Home() {
  return <RouterProvider router={router} />;
}
