"use client";
import { create } from "zustand";
import { Users } from "./generated/prisma/client";
import { useEffect } from "react";
import axios from "axios";

type UseUserStore = {
  accessToken: string;
  user: Users | null;
  loading: boolean;
  setUser: (user: Users | null) => void;
  setAccessToken: (accessToken: string) => void;
  setLoading: (loading: boolean) => void;
};

const useUserStore = create<UseUserStore>((set) => ({
  user: null,
  accessToken: "",
  loading: true,
  setUser: (user: Users | null) => set(() => ({ user })),
  setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}));

export const useUser = () => {
  const { user, accessToken, setAccessToken, loading } = useUserStore();

  return { user, accessToken, loading, setAccessToken };
};

export const UserProvider = () => {
  const { accessToken, setUser, setAccessToken, setLoading } = useUserStore();
  useEffect(() => {
    if (window) {
      if (localStorage.getItem("accessToken")) {
        setAccessToken(localStorage.getItem("accessToken") || "");
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      axios
        .get("/api/auth/me", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
        .then((res) => {
          setUser(res.data.user);
          setLoading(false);
          localStorage.setItem("accessToken", accessToken);
        })
        .catch(({ response }) => {
          localStorage.removeItem("accessToken");
          alert(response.data.message);
          setUser(null);
          setAccessToken("");
          setLoading(false);
        });
    }
  }, [accessToken]);
  return null;
};
