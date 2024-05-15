'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PageLayout from './layout';
import Footer from '@/components/Footer';
import dji122Image from '../../../public/images/högt3.jpg';

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
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
        <div className="items-start min-h-screen pt-20">
          <p className="text-white text-center md:text-left">
            This is Service Page
          </p>

          <p>This is the data from extern Api</p>
          {data && (
            <div>
              {data && (
                <div className="text-white">
                  <p>
                    <strong>Title:</strong> {data.title}
                  </p>
                  <p>
                    <strong>Body:</strong> {data.body}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
