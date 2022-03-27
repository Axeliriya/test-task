import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { SortEnum } from '../components/UsersList/sort.reducer';
import { UserModel } from '../interfaces/user.interface';
import apiServices from '../services/api-service';

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
  // const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setUsersState(users);
  }, [setUsersState, users]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiServices.getUsers();
        setUsersState(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError(error?.message);
          throw new Error(error?.message);
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <TestContext.Provider value={{ users: usersState }}>
      {children}
    </TestContext.Provider>
  );
};
