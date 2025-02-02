import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Marks.css"; 

Chart.register(...registerables);

const AttendanceDashboard = () => {
  const module1Marks = [85, 60, 62, 65, 70];
  const module2Marks = [60, 61, 63, 64, 68];
  const labels = ["CN", "RL", "BDA", "Open Elective", "MAD"];

  const subjectsData = [
    { subject: "CN", values: [10, 5, 5, 3, 17, 18, 15, 4, 4, 15] },
    { subject: "RL", values: [18, 2, 3, 16, 16, 13, 4, 2, 15, 18] },
    { subject: "BDA", values: [17, 2, 4, 16, 18, 13, 5, 2, 18, 12] },
    { subject: "Open Elective", values: [15, 2, 3, 12, 14, 13, 3, 4, 13, 16] },
    { subject: "MAD", values: [18, 2, 5, 18, 19, 14, 4, 5, 17, 12] },
];

const dataModule1 = {
    labels,
    datasets: [
      {
        label: "Marks in Module 1",
        data: module1Marks,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
};

const dataModule2 = {
    labels,
    datasets: [
      {
        label: "Marks in Module 2",
        data: module2Marks,
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.3,
      },
    ],
};

return (
    <div className="attendance-dashboard">
      <h1>Marks Table</h1>
      <table>
        <thead>
          <tr>
            <th colSpan="11">Marks</th>
          </tr>
          <tr>
            <th></th>
            <th colSpan="5">Module 1</th>
            <th colSpan="5">Module 2</th>
          </tr>
          <tr>
            <th>Subjects</th>
            {[...Array(10)].map((_, i) => (
  <th key={i}>T{(i % 5) + 1}</th>
))}
          </tr>
        </thead>
        <tbody>
          {subjectsData.map((row) => (
            <tr key={row.subject}>
              <td>{row.subject}</td>
              {row.values.map((value) => (
                <td key={value}><input type="number" value={value} readOnly /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
      <div className="chart-container">
        <h2>Line Chart for Module 1</h2>
        <Line data={dataModule1} />
      </div>

      <div className="chart-container">
        <h2>Line Chart for Module 2</h2>
        <Line data={dataModule2} />
      </div>

      {}
      <a href="/dashboard" className="back-button">Back to Dashboard</a> {}
    </div>
);
};

export default AttendanceDashboard;
