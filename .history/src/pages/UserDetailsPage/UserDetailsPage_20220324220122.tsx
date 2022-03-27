import { UsersList, Title } from '../../components';
import { UserDetailsProps } from './UserDetailsPage.props';
// import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = ({ users, isLoading, ...props }: UserDetailsProps): JSX.Element => {
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      {/* <UsersList /> */}
    </>
  );
};
