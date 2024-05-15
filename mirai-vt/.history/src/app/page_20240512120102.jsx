import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import ImageHome from '@/components/ImageHome';
import { AuthProvider } from './AuthContext';

export default function Home() {
  return (
    <>
      <Navbar />
      <Member isNewMember={false} />
      <ImageHome />
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  );
}
