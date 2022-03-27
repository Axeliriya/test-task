import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserModel } from '../../interfaces/user.interface';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError(error?.message);
          throw new Error(error?.message);
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.users} {...props}>
          {users.map(user => (
            <UsersItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};
