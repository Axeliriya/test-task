// import { UsersItem } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersList.module.scss';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    };
  });
  return <ul className={styles.users}></ul>;
};
