import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import ImageHome from '@/components/ImageHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <Member isNewMember={false} />
      <ImageHome />
    </>
  );
}
