import Navbar from '@/components/Navbar';
import PageLayout from './layout';
import Footer from '@/components/Footer';
import högt1Image from '../../../public/images/högt1.jpg';

export default function Page() {
  return (
    <PageLayout>
      <Navbar />
      <section
        className="bg-black border-b border-indigo-500 py-20 mb-4"
        style={{
          backgroundImage: `url(${högt1Image.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
        }}
      ></section>
      <section
        className="bg-black border-b border-indigo-500 py-20 mb-4"
        style={{
          backgroundImage: `url(${högt1Image.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
      ></section>
      <Footer />
    </PageLayout>
  );
}
