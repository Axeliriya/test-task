import { UsersItem } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersList.module.scss';
import { RotatingLines } from 'react-loader-spinner';

export const UsersList = ({ path }): JSX.Element => {
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
        <div className={styles.spinner}>
          <RotatingLines width="40" />
        </div>
      ) : (
        <ul className={styles.users}>
          {users.map(user => (
            <UsersItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};
