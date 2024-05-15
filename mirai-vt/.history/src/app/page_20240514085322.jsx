import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import CardHome from '@/components/CardHome';
import ImagesList from '@/components/ImagesList';
import Footer from '@/components/Footer';
import DashboardLayout from '../pages/dashboard/layout';

export default function Home() {
  return (
    <>
      <Navbar />
      <Member isNewMember={false} />
      <CardHome />
      <ImagesList />
      <Footer />
    </>
  );
}
