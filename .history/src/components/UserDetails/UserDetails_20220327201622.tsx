import { Button, Card, Input, Textarea, Loader, Title } from '..';
import styles from './UserDetails.module.scss';
import {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from 'react';
import apiServices from '../../services/api-service';
import { useParams } from 'react-router-dom';
import { validateRules } from '../../helpers/validate';

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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile | { [x: string]: string }>();
  const [comment, setComment] = useState<{ [x: string]: string }>();
  const [read, setRead] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const id = Number(userId);

      try {
        const { data } = await apiServices.getDetailsUser(id);
        const profile = {
          name: data[0].name,
          username: data[0].username,
          email: data[0].email,
          street: data[0].address.street,
          city: data[0].address.city,
          zipcode: data[0].address.zipcode,
          phone: data[0].phone
            .replace(/-/g, '')
            .slice(0, 11)
            .replace(/\d/, '8'),
          website: data[0].website,
        };
        setProfile(profile);
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
  }, [userId]);

  const onEditProfile = () => {
    setRead(!read);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, ...{ [e.target.name]: e.target.value } });
    Object.entries(validateRules()).map(([key, value]) => {
      if (key === e.target.name) {
        if (!value.rule(e.target.value)) {
          console.log(e.target.value);
          setIsValid(true);
          setMessage(value.errorMesagge);
        }
      }
    });
  };

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log({ ...profile, ...comment });
  };

  const onSubmitByEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSubmit();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <div className={styles.user}>
          <Title>?????????????? ????????????????????????</Title>
          <Button
            className={styles.btn_primary}
            text="??????????????????????????"
            appearance="primary"
            onClick={onEditProfile}
          />
          <form
            className={styles.form}
            action="submit"
            onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
          >
            <Card className={styles.profile}>
              {profile &&
                Object.entries(profile).map(([key, value]) => (
                  <Input
                    key={key}
                    className={styles.input}
                    name={key}
                    text={value}
                    readOnly={read}
                    onChange={onChange}
                  />
                ))}
              <Textarea
                name="comment"
                readOnly={read}
                onChange={onChangeTextarea}
                onKeyDown={onSubmitByEnter}
                className={styles.textarea}
              />
            </Card>
            <Button
              className={styles.btn}
              text="??????????????????"
              appearance={read ? 'ghost' : 'green'}
              disabled={read ? true : false}
              type="submit"
            />
          </form>
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};
