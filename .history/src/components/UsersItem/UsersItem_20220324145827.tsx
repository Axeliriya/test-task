// import { UsersItem } from '..';

import { UserModel } from '../../interfaces/user.interface';
import styles from './UsersItem.module.scss';

export const UsersItem = ({ user, ...props }: UserModel): JSX.Element => {
  return <li {...props}>{user}</li>;
};
