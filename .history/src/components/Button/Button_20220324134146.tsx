import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ text, appearance, children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {text}
      {children}
    </button>
  );
};
