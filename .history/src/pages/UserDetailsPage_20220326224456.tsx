import { useEffect } from 'react';
import { UserDetails } from '../components';

interface UserPageProps {
  setSort: (sort: SortEnum, dispatch: Dispatch<SortAction>) => void;
}

export const UserDetailsPage = (): JSX.Element => {
  useEffect(() => {
    // console.log(props.path);
  }, []);
  return <UserDetails />;
};
