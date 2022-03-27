// import { UsersItem } from '..';

import { UserModel } from '../../interfaces/user.interface';
import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  return <li {...props}>{user}</li>;
};
