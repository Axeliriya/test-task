import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ text, appearance, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
