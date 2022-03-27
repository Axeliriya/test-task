import { UsersList, Title } from '../components';

interface UserPageProps exte

export const UsersPage = ({ setSort }): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
