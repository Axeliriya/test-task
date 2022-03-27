import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { useContext, useEffect, useReducer, useState } from 'react';
import apiServices from '../../services/api-service';
import { UserModel } from '../../interfaces/user.interface';
import { SortEnum, sortReducer } from './sort.reducer';
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
