// import {createContext, useContext, useState } from "react";

// const AuthContext = createContext()

// export default AuthProvider = ({children}) =>{
//   const [isLogin, setIsLogin] = useState(false);

//   const login = () => setIsLogin(true);
//   const logout = () => setIsLogin(false)
  
//   return(
//     // page Access
//     <AuthContext.Provider value={{isLogin,login,logout}}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = ()=>useContext(AuthContext)

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Example auth state (replace with your real auth logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth
export const useAuth = () => useContext(AuthContext);
