import { useEffect } from 'react';
import { UsersList, Title } from '../../components';
import { UserDetailsProps } from './UserDetailsPage.props';
// import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = ({ users, isLoading, ...props }: UserDetailsProps): JSX.Element => {
  useEffect(() => {
    console.log(props.path);
  }, []);
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      {/* <UsersList /> */}
    </>
  );
};
