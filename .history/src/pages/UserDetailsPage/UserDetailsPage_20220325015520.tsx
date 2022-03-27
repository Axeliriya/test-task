import { useEffect } from 'react';
import { UserDetails, Title } from '../../components';
// import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = (): JSX.Element => {
  useEffect(() => {
    // console.log(props.path);
  }, []);
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      <UserDetails />
    </>
  );
};
