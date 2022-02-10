import React from 'react';
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
    </div>
  );
}

export default App;
