import Navbar from '@/components/Navbar';
import PageLayout from './layout';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <PageLayout>
      <Navbar />
      <Footer />
    </PageLayout>
  );
}
