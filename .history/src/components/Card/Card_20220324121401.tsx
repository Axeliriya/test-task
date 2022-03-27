import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { CardProps } from '';

export const Card = ({color, children}: CardProps): JSX.Element => {
  return <div className={styles.card}>{children}</div>;
};
