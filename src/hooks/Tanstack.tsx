import { useQuery } from "@tanstack/react-query";
import { oneUser, transactionHistory } from "../api/authApi";

export const getUserTask = (id: string) => {
  const { data } = useQuery({
    queryKey: ["getTask", { id: id }],
    queryFn: () => oneUser(id),
    refetchInterval:1000
  });
  return { data };
};

export const getTransactionHistory = (id: string) => {
  const { data } = useQuery({
    queryKey: ["getTask", { id: id }],
    queryFn: () => transactionHistory(id),
    refetchInterval:1000
  });
  return { data };
};
