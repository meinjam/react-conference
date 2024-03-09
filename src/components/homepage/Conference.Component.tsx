import { getClient } from '@/lib/graphql/customApolloClient';
import { getAllConferences } from '@/lib/graphql/queries';
import Link from 'next/link';
import React from 'react';

const Conference = async () => {
  const { data, loading, error } = await getClient().query({ query: getAllConferences });

  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);

  return (
    <section id='conference-details' className='pt-5 mt-60'>
      <div className='container'>
        <h1 className='text-heading-1 font-bold text-center leading-[58px]'>Conference</h1>

        {data?.conferences?.map((conference: any) => (
          <Link
            href={`/conference/${conference?.id}`}
            key={conference?.id}
            className='shadow mb-3 rounded-lg px-4 py-7 block'
          >
            <h1>{conference?.name}</h1>
            <h1>{conference?.slogan}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Conference;
