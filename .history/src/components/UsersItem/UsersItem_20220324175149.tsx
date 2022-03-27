import { Card } from '../Card/Card';
import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  const { name, address, company } = user;

  return (
    <li {...props}>
      <Card color="light">
        <div>
          <span className={styles.span}>ФИО: </span>
          {name}
        </div>
        <div>
          <span className={styles.span}>город: </span>
          {address.city}
        </div>
        <div>
          <span className={styles.span}>компания: </span>
          {company.name}
        </div>
      </Card>
    </li>
  );
};
