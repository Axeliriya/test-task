import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { UsersListProps } from './UsersList.props';

export const UsersList = ({ users, isLoading, ...props }: UsersListProps): JSX.Element => {
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
