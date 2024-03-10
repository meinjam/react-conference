import React from 'react';
import { getClient } from '@/lib/graphql/customApolloClient';
import { getSingleConference } from '@/lib/graphql/queries';
import ConferenceRow from '@/components/conference/ConferenceRow.Component';
import Loading from '@/app/conference/[slug]/loading';

const ConferencePage = async ({ params }: { params: { slug: string } }) => {
  const { data, loading, error } = await getClient().query({
    query: getSingleConference,
    variables: { id: params?.slug },
  });

  if (loading) {
    <Loading />;
  }

  if (error) {
    <div>Sorry, there is an error to fetching data.</div>;
  }

  return (
    <section className='mt-14 mb-24'>
      <div className='container'>
        <div className='mb-12'>
          <h1 className='text-heading-1 mb-4'>{data?.conference?.name}</h1>
          <p className='text-heading-3 text-[#0a142fcc]'>{data?.conference?.slogan}</p>
        </div>
        <ConferenceRow data={data} />
      </div>
    </section>
  );
};

export default ConferencePage;
