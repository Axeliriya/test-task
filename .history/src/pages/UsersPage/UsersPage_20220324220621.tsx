import { UsersList, Title } from '../../components';
import { UsersProps } from './UsersPage.props';

export const UsersPage = ({ users, isLoading, ...props }: UsersProps): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList users={users} isLoading={isLoading} {...props} />
    </>
  );
};
