import {use}
import Navbar from '@/components/Navbar';
import PageLayout from './layout';
import Footer from '@/components/Footer';
import dji122Image from '../../../public/images/högt3.jpg';

export default function Page() {
  return (
    <PageLayout>
      <Navbar />

      <section
        className="bg-black border-b border-indigo-500 py-20 mb-4"
        style={{
          backgroundImage: `url(${dji122Image.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className="flex justify-center items-start min-h-screen pt-20">
    <p className="text-white text-center md:text-left">
      This is Service Page
    </p>
  </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
