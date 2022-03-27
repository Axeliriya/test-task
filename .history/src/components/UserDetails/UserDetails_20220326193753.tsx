import { Button, Card, Input, Textarea, Loader, Title } from '..';
import styles from './UserDetails.module.scss';
import { useEffect, useState } from 'react';
import apiServices from '../../services/api-service';
import { UserModel } from '../../interfaces/user.interface';
import { useParams } from 'react-router-dom';

interface IProfile {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}

export const UserDetails = (): JSX.Element => {
  const [user, setUser] = useState<UserModel>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile>();

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const id = Number(userId);

      try {
        const { data } = await apiServices.getDetailsUser(id);
        console.log(data);
        const profile = {
          name: data[0].name,
          username: data[0].username,
          email: data[0].email,
          street: data[0].address.street,
          city: data[0].address.city,
          zipcode: data[0].address.zipcode,
          phone: data[0].phone,
          website: data[0].website,
        };
        setProfile(profile);
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

  // const onEditProfile = ()

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
            {/* {Object.entries(profile).map(([key, value]) => (
              <Input className={styles.input} name={key} text={value}></Input>
            ))} */}
            {/* <Input
              className={styles.input}
              name="Name"
              text={user?.name}
            ></Input>
            <Input
              className={styles.input}
              name="User name"
              text={user?.username}
            ></Input>
            <Input
              className={styles.input}
              name="E-mail"
              text={user?.email}
            ></Input>
            <Input
              className={styles.input}
              name="Street"
              text={user?.address?.street}
            ></Input>
            <Input
              className={styles.input}
              name="City"
              text={user?.address?.city}
            ></Input>
            <Input
              className={styles.input}
              name="Zipcode"
              text={user?.address?.zipcode}
            ></Input>
            <Input
              className={styles.input}
              name="Phone"
              text={user?.phone}
            ></Input>
            <Input
              className={styles.input}
              name="Website"
              text={user?.website}
            ></Input> */}
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
