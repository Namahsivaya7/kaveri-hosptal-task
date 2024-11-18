import React from "react";
import { useDashboard } from "../context/DashboardContext";

const Transactions = () => {
  const { data } = useDashboard();

  return (
    <div className="transactions">
      <h3>Last 10 Transactions</h3>
      <table>
        <thead>
          <tr className="Trow">
            <th>Sl No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.name}</td>
              <td className="Tdate">{transaction.date}</td>
              <td className="Tstatus">{transaction.status}</td>
              <td className="Tamount">{`Rs. ${transaction.amount}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
