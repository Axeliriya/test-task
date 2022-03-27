import { Dispatch } from 'react';
import { UsersList, Title } from '../components';
import { SortAction, SortEnum } from '../components/UsersList/sort.reducer';

interface UserPageProps {
  setSort: (sort: SortEnum, dispatch: Dispatch<SortAction>) => void;
}

export const UsersPage = ({ setSort }: UserPageProps): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
