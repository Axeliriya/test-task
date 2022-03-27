import { useEffect } from 'react';
import { UserDetails, Title } from '../components';
import { Link, useLocation, Outlet } from 'react-router-dom';

export const UserDetailsPage = (): JSX.Element => {
  useEffect(() => {
    // console.log(props.path);
  }, []);
  return (
    <>
      <Title>Профиль пользоваетля</Title>
      <UserDetails />
      <Outlet />
    </>
  );
};
