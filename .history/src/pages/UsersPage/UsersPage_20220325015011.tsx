import { UsersList, Title } from '../../components';
import { UsersProps } from './UsersPage.props';

export const UsersPage = (): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
