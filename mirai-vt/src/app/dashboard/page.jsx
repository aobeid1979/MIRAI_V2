import Navbar from '@/components/Navbar';
import DashboardLayout from './layout';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Navbar />
      <Footer />
    </DashboardLayout>
  );
}
