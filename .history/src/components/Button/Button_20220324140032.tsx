import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ text, appearance, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.green]: appearance === 'green',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {text}
    </button>
  );
};
