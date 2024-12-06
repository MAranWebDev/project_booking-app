'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

// Types
interface Context {
  counter: number;
  changeCounter: () => void;
}

// Context
const AppContext = createContext<Context | undefined>(undefined);

// Context provider
export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(0);

  // Utils
  const changeCounter = () => setCounter((prevState) => prevState + 1);

  // Context values
  const contextValues: Context = {
    counter,
    changeCounter,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

// Context custom hook
export const useAppContext = () => {
  const contextValues = useContext(AppContext);

  if (contextValues === undefined)
    throw new Error(`useAppContext must be used within AppProvider`);
  return contextValues;
};
