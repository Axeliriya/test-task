import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import cn from '';

export const Card = ({ color, children }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.gray]: color === 'gray',
      })}
    >
      {children}
    </div>
  );
};
