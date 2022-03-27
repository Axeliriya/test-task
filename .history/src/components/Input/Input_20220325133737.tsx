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
  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, className)}
        id={name}
        name={name}
        value={text}
        type="text"
        // onChange={e => onChange(e)}
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
