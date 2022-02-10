import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100]
    },
  ],
};

const data2 = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100],
      options: {
        indexAxis: 'y',
      },
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <Bar data={data2} />
    </div>
  );
};

export default BarPlot;
