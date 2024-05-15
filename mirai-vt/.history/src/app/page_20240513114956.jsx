import Navbar from '@/components/Navbar';
import Member from '@/components/Member';
import CardHome from '@/components/CardHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <Member isNewMember={false} />
      <CardHome />
    </>
  );
}
