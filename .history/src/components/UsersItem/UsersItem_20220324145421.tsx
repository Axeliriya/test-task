// import { UsersItem } from '..';
import { useEffect, useState } from 'react';
import { UserModel } from '../../interfaces/user.interface';
import axios from 'axios';
import styles from './UsersItem.module.scss';

export const UsersItem = ({user}: UserModel): JSX.Element => {
  return (
    <li>{user}</li>
  );
};
