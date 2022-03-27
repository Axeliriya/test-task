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
  const [error, setError] = useState<boolean>(false);
  const [massage, setMessage] = useState<string>('');
  const [type, setType] = useState<string>('text');

  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  useEffect(() => {
    const getType = () => {
      name === 'phone' && setType('tel');
      name === 'email' && setType('email');
    };
    getType();
  }, [name]);

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value.length < 1
      ? (setError(true), setMessage('Поле обязательно для заполнения'))
      : setError(false);
    e.target.name === 'email' && /.+@.+\..+/i.test(e.target.value)
      ? setError(false)
      : (setError(true), setMessage('Неверный формат e-mail'));
    e.target.name === 'phone' &&
    /\d{9,12}$/g.test(e.target.value) &&
    e.target.value.replace(/\D/, '')
      ? setError(false)
      : (setError(true), setMessage('Неверный формат e-mail'));
    console.log(e.target);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {error && massage && <div className={styles.messageError}>{massage}</div>}
      <label className={styles.label} htmlFor={name}>
        {name && label(name)}
      </label>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        id={name}
        name={name}
        value={text}
        type={type}
        readOnly={readOnly}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e);
          validate(e);
        }}
        {...props}
      />
    </div>
  );
};
