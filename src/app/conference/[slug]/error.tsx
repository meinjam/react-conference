'use client';

import Link from 'next/link';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className='my-40'>
      <div className='container text-center'>
        <h1 className='text-hero'>404</h1>
        <h2 className='text-heading-3 my-10'>Sorry the page is looking for is not found.</h2>
        <div className='flex justify-center'>
          <Link
            // onClick={() => reset}
            href='/'
            className='bg-theme-yellow text-white text-heading-3 px-20 py-5 rounded-30'
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
