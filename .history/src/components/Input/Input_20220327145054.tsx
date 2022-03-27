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

  const isValid = (str: string) => {
    if (str === 'phone') {
      setType('tel');
    }
    if (str === 'email') {
      setType('email');
    }
  };

  useEffect(() => {
    console.log(text);

    // isValid();
  }, []);

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
        type={isValid(type)}
        readOnly={readOnly}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        {...props}
      />
    </div>
  );
};
