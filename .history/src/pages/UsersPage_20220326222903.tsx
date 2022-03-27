import { UsersList, Title } from '../components';

export const UsersPage = ({ setSort }): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
