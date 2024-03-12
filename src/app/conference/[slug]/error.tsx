'use client';

import Link from 'next/link';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className='my-20 md:my-40'>
      <div className='container text-center'>
        <h1 className='text-hero'>404</h1>
        <h2 className='my-10 text-heading-3'>Sorry the page is looking for is not found.</h2>
        <div className='flex justify-center'>
          <Link
            // onClick={() => reset}
            href='/'
            className='rounded-30 bg-theme-yellow px-20 py-5 text-heading-3 text-white'
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
