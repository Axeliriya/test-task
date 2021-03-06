import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { useContext } from 'react';
import { TestContext } from '../../context/app.context';

export const UsersList = (): JSX.Element => {
  const { users, isLoading } = useContext(TestContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.users}>
          {users && users.map(user => <UsersItem key={user.id} user={user} />)}
        </ul>
      )}
    </>
  );
};
