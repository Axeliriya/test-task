import { UsersItem, Loader } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersList.module.scss';

export const UsersList = (): JSX.Element => {
  return (
    <>
      {isLoading ? (
        <Loader />
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
