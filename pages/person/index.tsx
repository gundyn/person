import { FC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson'

const PersonPage: FC = () => {
  const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error, IPerson, string> = useQuery<IPerson, Error>('person', async () => {
    const res = await fetch('/api/person');
    return res.json();
  }, {
    staleTime: 5 * 1000,
  }
);
  
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) return <p>Error is -- {error?.message}</p>;
  
  return (
    <>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </>
  );
};

export default PersonPage;
