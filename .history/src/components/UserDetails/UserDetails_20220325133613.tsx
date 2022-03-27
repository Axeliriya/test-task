import { Button, Card, Input, Textarea, Loader, Title } from '..';
import styles from './UserDetails.module.scss';
import { useEffect, useState } from 'react';
import apiServices from '../../services/api-service';
import { UserModel } from '../../interfaces/user.interface';
import { useParams } from 'react-router-dom';

export const UserDetails = (): JSX.Element => {
  const [user, setUser] = useState<UserModel>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userId } = useParams();

  // const {
  //   name,
  //   username,
  //   email,
  //   address: { street, city, zipcode },
  //   phone,
  //   website,
  // } =  as UserModel;

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const id = Number(userId);

      try {
        const { data } = await apiServices.getDetailsUser(id);
        console.log(data[0]);
        setUser(data[0]);
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
        <div className={styles.user}>
          <Title>Профиль пользоваетля</Title>
          <Button
            className={styles.btn_primary}
            text="Редактировать"
            appearance="primary"
          />
          <Card className={styles.profile}>
            <Input
              className={styles.input}
              name="Name"
              text={user?.name}
            ></Input>
            <Input
              className={styles.input}
              name="Username"
              text={user?.username}
            ></Input>
            <Input
              className={styles.input}
              name="email"
              text={user?.email}
            ></Input>
            <Input
              className={styles.input}
              name="street"
              text={user?.address?.street}
            ></Input>
            <Input
              className={styles.input}
              name="sity"
              text={user?.address?.city}
            ></Input>
            <Input
              className={styles.input}
              name="zipcode"
              text={user?.address?.zipcode}
            ></Input>
            <Input
              className={styles.input}
              name="phone"
              text={user?.phone}
            ></Input>
            <Input
              className={styles.input}
              name="website"
              text={user?.website}
            ></Input>
            <Textarea className={styles.textarea} />
          </Card>
          <Button
            className={styles.btn_ghost}
            text="Отправить"
            appearance="ghost"
          />
        </div>
      )}
    </>
  );
};
