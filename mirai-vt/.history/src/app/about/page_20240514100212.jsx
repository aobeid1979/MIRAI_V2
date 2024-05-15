import Navbar from '@/components/Navbar';
import PageLayout from './layout';
import Footer from '@/components/Footer';
import dji1Image from '../../../public/images/dji1.jpg';

export default function Page() {
  return (
    <PageLayout>
      <Navbar />
      <section
      className="bg-black border-b border-indigo-500 py-20 mb-4"
      style={{
        backgroundImage: `url(${dji1Image.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
      </div>
      
    </section>
      <Footer />
    </PageLayout>
  );
}
