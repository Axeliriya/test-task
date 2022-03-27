import { Link, useLocation } from 'react-router-dom';
import { Card } from '..';
import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  const { name, address, company, id } = user;
  const { pathname } = useLocation();

  return (
    <li {...props}>
      <Card className={styles.card} color="light">
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
        <Link to={`${id}`}>
          <a className={styles.link} href="">
            Подробнее
          </a>
        </Link>
      </Card>
    </li>
  );
};
