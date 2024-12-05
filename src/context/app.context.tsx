'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

// Types
interface Context {
  counter: number;
  changeCounter: () => void;
}

// Create context
const AppContext = createContext<Context | undefined>(undefined);

// Context provider
export const AppProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(0);

  // Methods
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

// Context hook
export const useAppContext = () => {
  const contextValues = useContext(AppContext);

  if (contextValues === undefined)
    throw new Error(`useAppContext must be used within AppProvider`);
  return contextValues;
};
