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
  const [type, setType] = useState<string>('text');

  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  useEffect(() => {
    const isValid = () => {
      name === 'phone' && setType('tel');
      name === 'email' && setType('email');
    };
    isValid();
  }, [name]);

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setError(true);
    console.log(e);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
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
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e);
          validate(e);
        }}
        {...props}
      />
    </div>
  );
};
