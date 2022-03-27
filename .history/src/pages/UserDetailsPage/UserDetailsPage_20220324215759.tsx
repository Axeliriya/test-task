import { UsersList, Title } from '../../components';
// import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = ({ users, isLoading, ...props }: UsersProps): JSX.Element => {
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      <UsersList />
    </>
  );
};
