import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { useEffect, useReducer, useState } from 'react';
import apiServices from '../../services/api-service';
import { UserModel } from '../../interfaces/user.interface';
import { SortEnum, sortReducer } from './sort.reducer';

export const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [{ users: sortedUsers, sort }, dispatchUsers] = useReducer(
    sortReducer,
    { users, sort: SortEnum.Name },
  );

  const setSort = (sort: SortEnum) => {
    dispatchUsers({ type: sort });
  };

  useEffect(() => {
    dispatchUsers({ type: 'reset', initialState: users });
  }, [users]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiServices.getUsers();
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
        <ul className={styles.users}>
          {users.map(user => (
            <UsersItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};
