import { UsersList, Title } from '../../components';
import { UserPageProps } from './UserPage.props';
// import styles from './Main.module.scss';

export const UsersPage = ({ path }: UserPageProps): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList path={path} />
    </>
  );
};
