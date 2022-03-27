import { UsersList, Title } from '../components';

export const UsersPage = ({ setSort: void }): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList setSort={setSort} />
    </>
  );
};
