import React from 'react';
import Chart from 'chart.js/auto';
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
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
  );

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
    </div>
  );
}

export default App;
