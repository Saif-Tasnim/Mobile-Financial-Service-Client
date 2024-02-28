import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const signIn = async (data) => {
    setLoading(true);
    const res = await axios.post("http://localhost:5000/users/auth", data);
    if (res.data) {
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setLoading(false);
    }
    return res;
  };

  const signUp = async (data) => {
    setLoading(true);
    const res = await axios.post("http://localhost:5000/insert-user", data);
    if (res.data.insertedId) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
    }

    return res;
  };

  useEffect(() => {
    const currentUserStringify = localStorage.getItem("user");
    const currentUser = JSON.parse(currentUserStringify);
    setUser(currentUser);
    if (user) {
      axios
        .post("http://localhost:5000/jwt", { email: user.email })
        .then((data) => {
          localStorage.setItem("access-token", data.data.token);
          setLoading(false);
        });
    } else {
      localStorage.removeItem("access-token");
    }
  }, [user]);

  const logOut = () => {
    localStorage.clear();
    setUser(null);
  };

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
