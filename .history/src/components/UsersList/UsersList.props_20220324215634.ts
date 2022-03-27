import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UserModel } from '../../interfaces/user.interface';

export interface UsersListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  users: UserModel[];
  isLoading?: boolean;
}
