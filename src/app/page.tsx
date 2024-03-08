import { getClient } from '@/lib/graphql/customApolloClient';
import { getAllConferences } from '@/lib/graphql/queries';

export default async function Home() {
  const { data, loading, error } = await getClient().query({ query: getAllConferences });

  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);

  return (
    <div>
      {/* <DndProvider backend={HTML5Backend}> */}
      <h1>Hello</h1>
      {/* </DndProvider> */}
    </div>
  );
}
