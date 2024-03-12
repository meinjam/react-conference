import { Suspense } from 'react';
import Conference from '@/components/homepage/Conference.Component';
import Showcase from '@/components/homepage/Showcase.Component';
import Sponsor from '@/components/homepage/Sponsor.Component';
import Loading from '@/components/loading/Loading.Component';

export default async function Home() {
  return (
    <>
      <Showcase />
      <Suspense fallback={<Loading />}>
        <Conference />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Sponsor />
      </Suspense>
    </>
  );
}
