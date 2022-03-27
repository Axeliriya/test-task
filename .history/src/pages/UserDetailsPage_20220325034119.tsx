import { useEffect } from 'react';
import { UserDetails } from '../components';

export const UserDetailsPage = (): JSX.Element => {
  useEffect(() => {
    // console.log(props.path);
  }, []);
  return <UserDetails />;
};
