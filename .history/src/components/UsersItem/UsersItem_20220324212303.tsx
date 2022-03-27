import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '..';
import styles from './UsersItem.module.scss';
import { UserProps } from './UsersItem.props';

export const UsersItem = ({ user, ...props }: UserProps): JSX.Element => {
  const [path, setPath] = useState<string>('');
  const { name, address, company, id } = user;
  const params = useParams();

  useEffect(() => {
    // const path = navigate(`/${id}`);
    console.log(params);
    // setPath(path);
  }, []);

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
        {/* <Link to={navigate(`/${id}`)}> */}
        <a className={styles.link} href="">
          Подробнее
        </a>
        {/* </Link> */}
      </Card>
    </li>
  );
};
