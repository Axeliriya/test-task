import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { SortEnum } from '../components/UsersList/sort.reducer';
import { UserModel } from '../interfaces/user.interface';

export interface ITestContext {
  users: UserModel[];
}

export const TestContext = createContext<ITestContext>({
  users: [],
});

export const TestContextProvider = ({
  users,
  children,
}: PropsWithChildren<ITestContext>): JSX.Element => {
  const [usersState, setUsersState] = useState<UserModel[]>(users);

  useEffect(() => {
    setUsersState(users);
  }, [setUsersState, users]);

  return (
    <TestContext.Provider value={{ users: usersState }}>
      {children}
    </TestContext.Provider>
  );
};
