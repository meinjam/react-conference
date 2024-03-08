import React from 'react';
import { getClient } from '@/lib/graphql/customApolloClient';
import { getSingleConference } from '@/lib/graphql/queries';

const ConferencePage = async ({ params }: { params: { slug: string } }) => {
  const { data, loading, error } = await getClient().query({
    query: getSingleConference,
    variables: { id: params?.slug },
  });

  console.log(data);

  return (
    <div>
      <h1>ConferencePage</h1>

      {JSON.stringify(data)}
    </div>
  );
};

export default ConferencePage;
