import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({
  name,
  text,
  onChange,
  className,
  ...props
}: InputProps): JSX.Element => {
  const label = (str: string) => {
    return str
      .replace(/\w/, (m: string) => m.toUpperCase())
      .replace(/E/, (m: string) => m + '-');
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
        // onChange={e => onChange(e)}
        {...props}
      />
    </div>
  );
};
