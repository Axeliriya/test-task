import { UsersList, Title } from '../../components';
// import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = (): JSX.Element => {
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      <UsersList />
    </>
  );
};
