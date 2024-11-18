import React from "react";
import { useDashboard } from "../context/DashboardContext";

const OrderSummary = () => {
  const { data } = useDashboard();

  return (
    <div className="order-summary">
      {Object.entries(data.metrics).map(([key, value], index) => (
        <div key={index} className="metric">
          <h3>{value}</h3>
          <p>{key.replace(/([A-Z])/g, " $1")}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
