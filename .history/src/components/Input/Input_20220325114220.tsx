import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({
  name,
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
        value={name}
        type="text"
        // onChange={e => onChange(e)}
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        {/* {name.replace(/\w/, m => m.toUpperCase())} */}
      </label>
    </div>
  );
};
