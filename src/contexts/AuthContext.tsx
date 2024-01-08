import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props: any) => {
  return <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>;
};
