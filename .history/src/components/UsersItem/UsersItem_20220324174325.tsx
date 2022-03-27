// import { UsersItem } from '..';

import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  const { name, address, company } = user;
  return <li {...props}>{user.name}</li>;
};
