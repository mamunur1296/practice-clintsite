import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ name: "mamun" });
  const [loder, setLoder] = useState(true);

  const regester = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoder(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsuscriber = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      setLoder(false);
    });
    return () => unsuscriber();
  }, []);

  const info = {
    user,
    loder,
    regester,
    login,
    logout,
  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
