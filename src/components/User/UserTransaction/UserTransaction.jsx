import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Heading from "../../Shared/Heading/Heading";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import Reverse from "../../Shared/Reverse/Reverse";

const UserTransaction = () => {
  const { user } = useContext(AuthContext);

  const { data: transaction = [] } = useQuery({
    queryKey: ["transaction", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/transaction/${user?.email}`
      );
      return res.data.data;
    },
  });

  return (
    <div>
      <Reverse />
      <Heading title={"My Transaction"} />

      {transaction.length === 0 ? (
        <div className="text-cancel text-head-2 text-center"> You have not transaction yet !!! </div>
      ) : (
        <div className="w-full mx-10">
          {transaction.map((td) => (
            <div className="flex justify-between items-center">
              <p>{td.reciever}</p>
              <p>{td.amount}</p>
              <p>{td.transactionId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTransaction;
