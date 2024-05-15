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
        className="flex flex-col bg-black border-b border-indigo-500 py-20 mb-4"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          className="w-full h-1/2"
          style={{
            backgroundImage: `url(${dji122Image.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>

        <div className="w-full h-1/2 items-start pt-20 text-white">
          <p className="text-center md:text-left">This is Service Page</p>

          <p>This is the data from extern Api</p>
          {data && (
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Title:</strong>
                  </td>
                  <td>{data.title}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Body:</strong>
                  </td>
                  <td>{data.body}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
