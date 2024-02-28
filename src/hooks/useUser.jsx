import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/client/${user?.email}`);
      return res.data.client;
    },
  });
  return [isUser, isUserLoading];
};

export default useUser;
