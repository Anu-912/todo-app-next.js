"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This fetches your user data from your API
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false); // SUCCESS: This turns off the "Loading..." text
      })
      .catch((err) => {
        console.error("Auth failed:", err);
        setLoading(false); // Stop loading even on failure
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
