import { useEffect } from 'react';
import { UserDetails, Title } from '../components';

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
