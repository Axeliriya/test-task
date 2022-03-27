import { Button, Card, Input, Loader, Title } from '..';
import styles from './UserDetails.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserModel } from '../../interfaces/user.interface';
import { useParams } from 'react-router-dom';

export const UserDetails = (): JSX.Element => {
  const [user, setUser] = useState<UserModel>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${userId}`,
        );
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError(error?.message);
          throw new Error(error?.message);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>Профиль пользоваетля</Title>
          <Button text="Редактировать" />
          <Card className={styles.profile}>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>
          </Card>
        </>
      )}
    </>
  );
};