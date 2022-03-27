import { UsersItem } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersList.module.scss';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(data);

      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <ul className={styles.users}>
      {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
