import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { ChangeEvent } from 'react';
import { useState } from 'react';

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
  const [textValid, setTextValid] = useState<string>();

  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  const isValid = () => {
    if (name === 'phone') {
      setType('tel');
      const valid = text?.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/g, '8$2$3$4');
      setTextValid(valid);
    }
  };

  isValid();

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
        value={textValid}
        type={type}
        readOnly={readOnly}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        {...props}
      />
    </div>
  );
};
