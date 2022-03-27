import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { ChangeEvent } from 'react';

export const Input = ({
  name,
  text,
  onChange,
  readOnly,
  className,
  ...props
}: InputProps): JSX.Element => {
  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-')
      .replace(/Zip/, (m: string) => m + ' ');
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={name}>
        {name && label(name)}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={text}
        type="text"
        readOnly={readOnly}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        {...props}
      />
    </div>
  );
};
