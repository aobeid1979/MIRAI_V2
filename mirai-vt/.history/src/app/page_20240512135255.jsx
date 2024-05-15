import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import ImageHome from '@/components/ImageHome';
import { AuthProvider } from '@/Context/AuthContext';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    </>
  );
}
