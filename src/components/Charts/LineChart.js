import React from 'react';
import Chart from 'react-apexcharts'

const LineChart = ({ chartData, options }) => {
  if(!options) return;
  return (
    <Chart
      options={options}
      series={chartData}
      type="line"
      width="100%"
      height="376px"
    />
  );
};

export default LineChart;
