import React from "react";
import './AnalyticsChart.css';

const AnalyticsChart = () => {
  // Static data
  const analyticsData = [
    { day: "Monday", totalOrders: 14, approvalPending: 13 },
    { day: "Tuesday", totalOrders: 17.5, approvalPending: 12 },
    { day: "Wednesday", totalOrders: 5.5, approvalPending: 23 },
    { day: "Thursday", totalOrders: 16, approvalPending: 7 },
    { day: "Friday", totalOrders: 12, approvalPending: 11 },
    { day: "Saturday", totalOrders: 17, approvalPending: 13 },
    { day: "Sunday", totalOrders: 21, approvalPending: 11.5 },
  ];

  const maxHeight = 150; // Maximum height for the bars in pixels
  const maxValue = 25; // Maximum value on the Y-axis
  const yAxisInterval = 5; // Interval for Y-axis labels

  return (
    <div className="analytics">
      {/* <h3>Analytics</h3> */}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {/* Y-Axis with dotted lines */}
        <div className="y-axis">
  {Array.from({ length: maxValue / yAxisInterval + 1 }, (_, index) => (
    <div
      key={index}
      className="y-axis-label"
      style={{
        height: `${(yAxisInterval / maxValue) * maxHeight}px`,
        position: "relative",
        display: "flex",
        alignItems: "flex-end", // Align labels correctly
      }}
    >
      <span>{index * yAxisInterval}</span>
      {/* Dotted line */}
      {index > 0 && ( // Skip dotted line for the 0 value
        <div
          className="dotted-line"
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            borderTop: "1px dotted #ccc",
          }}
        ></div>
      )}
    </div>
  ))}
</div>

        {/* Chart Bars */}
        <div className="chart" style={{ display: "flex", gap: "15px", alignItems: "flex-end" }}>
          {analyticsData.map((item, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                <div
                  style={{
                    height: `${(item.totalOrders / maxValue) * maxHeight}px`,
                    width: "15px",
                    backgroundColor: "#007bff",
                    margin: "0 2px",
                  }}
                  title={`Total Orders: ${item.totalOrders}`}
                ></div>
                <div
                  style={{
                    height: `${(item.approvalPending / maxValue) * maxHeight}px`,
                    width: "15px",
                    backgroundColor: "#FF9800",
                    margin: "0 2px",
                  }}
                  title={`Approval Pending: ${item.approvalPending}`}
                ></div>
              </div>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>{item.day}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center",gap:20, marginTop: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "15px", height: "15px", backgroundColor: "#007bff",borderRadius:"50%" }}></div>
          <span>Total Orders Received</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "15px", height: "15px", backgroundColor: "#FF9800",borderRadius:"50%" }}></div>
          <span>Order Approval Pending</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
