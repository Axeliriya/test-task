import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Input = ({
  name,
  text,
  onChange,
  readOnly,
  className,
  ...props
}: InputProps): JSX.Element => {
  // const [type, setType] = useState<string>('text');

  const [isValid, setIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  const getType = str => {
    str === 'phone' && 'tel';
    str === 'email' && 'email';
  };

  // useEffect(() => {
  //   const getType = () => {
  //     name === 'phone' && setType('tel');
  //     name === 'email' && setType('email');
  //   };
  //   getType();
  // }, [name]);

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);

    e.target.value.length < 1
      ? (setIsValid(true), setMessage('Поле обязательно для заполнения'))
      : setIsValid(false);
    if (e.target.name === 'email' && /.+@.+\..+/i.test(e.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true), setMessage('Неверный формат e-mail');
    }

    if (e.target.name === 'phone' && /\d{9,12}$/g.test(e.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setMessage('Телефонный номер должен содержать только цифры');
    }

    // e.target.name === 'zipcode' &&
    // /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e.target.value)
    //   ? setIsValid(false)
    //   : (setIsValid(true), setMessage('Неверный формат zip code'));
    // e.target.name === 'website' && /.+\..+/i.test(e.target.value)
    //   ? setIsValid(false)
    //   : (setIsValid(true), setMessage('Неверный формат website'));
    // (e.target.name === 'name' ||
    //   e.target.name === 'username' ||
    //   e.target.name === 'street' ||
    //   e.target.name === 'city') &&
    // /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(e.target.value)
    //   ? setIsValid(false)
    //   : (setIsValid(true),
    //     setMessage('Поле должно содержать только буквы и пробелы'));
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {isValid && message && (
        <div className={styles.messageError}>{message}</div>
      )}
      <label className={styles.label} htmlFor={name}>
        {name && label(name)}
      </label>
      <input
        className={cn(styles.input, {
          [styles.error]: isValid,
        })}
        id={name}
        name={name}
        value={text}
        type={() => getType(name)}
        readOnly={readOnly}
        onChange={(e: ChangeEvent<HTMLInputElement>) => (
          onChange(e), validate(e)
        )}
        {...props}
      />
    </div>
  );
};
