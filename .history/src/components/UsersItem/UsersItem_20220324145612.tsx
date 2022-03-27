// import { UsersItem } from '..';

import { UserModel } from '../../interfaces/user.interface';
import styles from './UsersItem.module.scss';

export const UsersItem = ({user}: UserModel): JSX.Element => {
  return (
    <li>{user}</li>
  );
};
