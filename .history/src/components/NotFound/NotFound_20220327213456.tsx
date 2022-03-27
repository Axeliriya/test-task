import styles from './NotFound.module.scss';
import errorImg from './404.png';

export const App = ({ users, error, isLoading }: AppProps): JSX.Element => {
  return (
    <div>
      <img src={errorImg} alt="Not Found Page" />
    </div>
  );
};
