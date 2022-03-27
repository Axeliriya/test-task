import { UsersList, Title } from '../../components';
import { UsersProps } from './UsersPage.props';
// import styles from './Main.module.scss';

export const UsersPage = ({ users, isLoading, ...props }: UsersProps): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
