import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';  
import './Attendance.css';

const StudentMarksTable = () => {
  const attendanceChartRef = useRef(null);

  const labels = ['CN', 'CN Lab', 'MAD', 'MAD Lab', 'BDA', 'BDA Lab', 'RL', 'RL Lab', 'Open Elective'];

  const subjectColors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8033', '#FF5733', 
    '#33FF57', '#FF33A1', '#FF8033'
  ];

  const updateChart = () => {
    const inputs = document.querySelectorAll('.attendance-input');
    const attendanceData = Array.from(inputs).map(input => parseFloat(input.value));

    attendanceChartRef.current.data.datasets[0].data = attendanceData;
    attendanceChartRef.current.update();
  };

  useEffect(() => {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    if (attendanceChartRef.current) {
        attendanceChartRef.current.destroy();
      }
    const attendanceChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Subject Attendance',
          data: [], 
          backgroundColor: subjectColors,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
              }
            }
          }
        }
      }
    });

    attendanceChartRef.current = attendanceChart;
    updateChart();

  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>Student Attendance Table</h1>
        <table>
          <thead>
            <tr>
              <th>Subjects</th>
              <th>CN</th>
              <th>CN Lab</th>
              <th>MAD</th>
              <th>MAD Lab</th>
              <th>BDA</th>
              <th>BDA Lab</th>
              <th>RL</th>
              <th>RL Lab</th>
              <th>Open Elective</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student 1</td>
              <td><input type="number" value="75" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="10" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="38" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="88" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="90" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="75" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="82" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="78" className="attendance-input" onChange={updateChart} readOnly /></td>
              <td><input type="number" value="58" className="attendance-input" onChange={updateChart} readOnly /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {}
      <div className="chart-container">
        <h2>Subject Attendance</h2>
        <canvas id="attendanceChart"></canvas>
      </div>

      {}
      <a href="/dashboard" className="back-btn">Back to Dashboard</a>
    </div>
  );
};

export default StudentMarksTable;