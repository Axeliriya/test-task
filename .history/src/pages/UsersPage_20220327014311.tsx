import { useContext, useEffect } from 'react';
import { UsersList, Title } from '../components';
import { TestContext } from '../context/app.context';

export const UsersPage = (): JSX.Element => {
  // const { users } = useContext(TestContext);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
