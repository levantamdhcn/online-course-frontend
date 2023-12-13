import React from 'react';
import Chart from 'react-apexcharts'
import { lineChartOptions } from './chartOptions';

const LineChart = ({ chartData }) => {
  return (
    <Chart
      options={lineChartOptions}
      series={chartData}
      type="line"
      width="100%"
      height="376px"
    />
  );
};

export default LineChart;
