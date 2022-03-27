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
    return str.replace(
      /(\w)(E)(Zip)/,
      (_, p1: string, p2: string, p3: string) => `${p3.toUpperCase}`,
    );
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
