import { UsersList, Title, withLayout } from '../components';

export const UsersPage = (): JSX.Element => {
  const { users } = useContext(TestContext);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};

export default withLayout(UsersPage);
