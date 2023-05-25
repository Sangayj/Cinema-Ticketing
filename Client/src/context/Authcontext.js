import React, { useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setPending(false);
      return;
    }

    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setCurrentUser(response.data);
        setPending(false);
      })
      .catch((error) => {
        console.error(error);
        setPending(false);
      });
  }, []);

  if (pending) {
    return "Loading...";
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};