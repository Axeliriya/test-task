import styles from './Title.module.scss';
import { TitleProps } from './Title.props';

export const Title = ({ children }: TitleProps ): JSX.Element => {
  return <h1 className={styles.title}>{children}</h1>;
};
