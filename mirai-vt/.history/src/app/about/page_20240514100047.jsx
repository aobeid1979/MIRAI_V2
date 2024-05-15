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
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className=" hover:text-black text-white font-bold py-2 px-4 rounded">
          {isNewMember ? 'Join Now' : 'Log In'}
        </button>
      </div>
    </section>
      <Footer />
    </PageLayout>
  );
}
