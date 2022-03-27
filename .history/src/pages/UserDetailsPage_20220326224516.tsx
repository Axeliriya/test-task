import { Dispatch, useEffect } from 'react';
import { UserDetails } from '../components';
import { SortAction, SortEnum } from '../components/UsersList/sort.reducer';

interface UserPageProps {
  setSort: (sort: SortEnum, dispatch: Dispatch<SortAction>) => void;
}

export const UserDetailsPage = ({ setSort }: UserPageProps): JSX.Element => {
  useEffect(() => {
    // console.log(props.path);
  }, []);
  return <UserDetails />;
};
