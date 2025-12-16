import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // fake auth
  const [ user, setUser] = useState ({
    name: "Admin",
    isAdmin: true, // change to false for normal user
  });

  const loginAsAdmin = () => {
    setUser({ name: "Admin User", isAdmin: true });
  };

  const loginAsUser = () => {
    setUser({ name: "Normal User", isAdmin: false });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loginAsAdmin, loginAsUser, logout  }}>
      {children}
    </AuthContext.Provider>
  );
}