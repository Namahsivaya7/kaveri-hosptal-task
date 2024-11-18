import React, { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState({
    user: { name: "Mohan", role: "Manager" },
    metrics: {
      totalOrders: 300,
      approvalPending: 50,
      totalTransactions: 250,
      requestsReceived: 20,
    },
    analytics: [
      { day: "Monday", totalOrders: 10, approvalPending: 5 },
      { day: "Tuesday", totalOrders: 20, approvalPending: 10 },
      { day: "Wednesday", totalOrders: 50, approvalPending: 15 },
      { day: "Thursday", totalOrders: 30, approvalPending: 12 },
      { day: "Friday", totalOrders: 40, approvalPending: 20 },
      { day: "Saturday", totalOrders: 25, approvalPending: 8 },
      { day: "Sunday", totalOrders: 35, approvalPending: 18 },
    ],
    transactions: Array(10).fill({
      name: "Shashi",
      date: "28/01/2024",
      status: "Delivered",
      amount: 300,
    }),
    topProducts: [
      { name: "Laparoscopes", popularity: 45 },
      { name: "Diagnostic Equipments", popularity: 29 },
      { name: "Wheelchairs", popularity: 18 },
      { name: "BP Monitors", popularity: 25 },
    ],
    balance: { current: 1000000, spent: 200000, limit: 5000000 },
  });

  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
