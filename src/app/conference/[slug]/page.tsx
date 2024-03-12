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
    <section className='mb-14 mt-4 md:mb-24 md:mt-14'>
      <div className='container'>
        <div className='mb-10 md:mb-12'>
          <h1 className='section-heading mb-3 md:mb-4'>{data?.conference?.name}</h1>
          <p className='text-heading-5 text-[#0a142fcc] md:text-heading-3'>{data?.conference?.slogan}</p>
        </div>
        <ConferenceRow data={data} key='ConferenceRowKey87567456' />
      </div>
    </section>
  );
};

export default ConferencePage;
