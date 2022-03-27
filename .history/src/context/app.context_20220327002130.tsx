import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { UserModel } from '../interfaces/user.interface';

export interface ITestContext {
  users: UserModel[];
  setSort?: (newMenu: MenuItem[]) => void;
}

export const TestContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  useEffect(() => {
    setMenuState(menu);
  }, [setMenuState, menu]);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
