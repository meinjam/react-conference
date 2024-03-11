import Conference from '@/components/homepage/Conference.Component';
import Showcase from '@/components/homepage/Showcase.Component';
import Sponsor from '@/components/homepage/Sponsor.Component';

export default async function Home() {
  return (
    <>
      <Showcase />
      <Conference />
      {/* <Sponsor /> */}
    </>
  );
}
