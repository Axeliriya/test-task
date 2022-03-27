import { UsersList, Title } from '../components';
import { SortEnum } from '../components/UsersList/sort.reducer';

interface UserPageProps extends Record<string | unknown> {
  setSort: (sort: SortEnum) => void;
}

export const UsersPage = ({ setSort }): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
