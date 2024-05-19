import Footer from '@/components/Footer';
import ImagesList from '@/components/ImagesList';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <ImagesList />
      <Footer />
    </>
  );
};

export default page;
