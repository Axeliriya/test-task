import styles from './Title.module.scss';
import { TitleProps } from '../App/App.props';

export const Title = ({ children }: TitleProps): JSX.Element => {
  return <h1 className={styles.title}>{children}</h1>;
};
