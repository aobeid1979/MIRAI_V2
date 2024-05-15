import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import ImageHome from '@/components/ImageHome';
import { AuthProvider } from './AuthContext';

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  );
}
