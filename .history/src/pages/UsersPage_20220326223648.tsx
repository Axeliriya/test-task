import { UsersList, Title } from '../components';
import { SortEnum } from '../components/UsersList/sort.reducer';



export const UsersPage = (): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList  />
    </>
  );
};
