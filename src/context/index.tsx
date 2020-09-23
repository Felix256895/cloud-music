import React, { createContext, useState, ReactNode, Dispatch } from 'react';

interface Props {
  children?: ReactNode;
}

interface Injected {
  provider: object;
  setProvider: Dispatch<any>;
}

export const ctx = createContext<Injected>({} as Injected);

export function Provider({ children }: Props) {
  const [provider, setProvider] = useState({});
  const value = {
    provider,
    setProvider
  };
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}
