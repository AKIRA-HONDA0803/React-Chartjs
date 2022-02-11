import React from 'react';
import { Chart, registerables } from 'chart.js';
import logo from './logo.svg';
import './App.css';
import LinePlot from './components/LinePlot';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
  } from 'chart.js';
import PiePlot from './components/PiePlot';
import BarPlot from './components/BarPlot';
import RadarPlot from './components/RadarPlot';
Chart.register(...registerables);

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
    </div>
  );
}

export default App;
