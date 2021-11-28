import { FC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson';
import PersonComponent from '@src/components/PersonComponent';

export const fetchPerson = async (): Promise<IPerson> => {
  const src = await fetch('/api/person');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network response not ok')
};

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
      <h1>Person Component</h1>
      <PersonComponent />
    </>
  );
};

export default PersonPage;
