// import { UsersItem } from '..';
import { useState } from 'react';
import styles from './UsersList.module.scss';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState([]);
  return <ul className={styles.users}></ul>;
};
