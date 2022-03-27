import { UsersItem } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersList.module.scss';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
        setIsLoading(true)
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setIsLoading(false)
      } catch (error) {
          
      }
    };
    fetchUsers();
  }, []);
  return {isLoading ? <div><RotatingLines width="100" /></div> : (<ul className={styles.users}>
      {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </ul>)}
};
