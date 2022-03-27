import styles from './App.module.scss';
import { Main } from '..';
import { ITestContext, TestContextProvider } from '../../context/app.context';
import { FunctionComponent, ReactNode } from 'react';

export interface AppProps {
  children?: ReactNode;
}

export const App = ({ children }: AppProps): JSX.Element => {
  return (
    <div className={styles.app}>
      <Main>{children}</Main>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & ITestContext>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <TestContextProvider users={props.users}>
        <App>
          <Component {...props} />
        </App>
      </TestContextProvider>
    );
  };
};
