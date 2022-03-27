import { UsersList, Title } from '../components';
import { SortEnum } from '../components/UsersList/sort.reducer';

interface UserPageProps {
  setSort: (sort: SortEnum) => void;
}

export const UsersPage = ({ setSort }: UserPageProps): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
