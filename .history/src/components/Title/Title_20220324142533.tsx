import styles from './Title.module.scss';

export const Title = ({ text }): JSX.Element => {
  return <h1 className={styles.title}>{text}</h1>;
};
