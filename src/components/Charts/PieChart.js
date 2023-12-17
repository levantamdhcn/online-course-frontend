import React from 'react';
import Chart from 'react-apexcharts'

const PieChart = ({ chartData, options }) => {
  if(!options) return;
  return (
    <Chart
      options={options}
      series={chartData}
      type="donut"
      width="100%"
      height="376px"
    />
  );
};

export default PieChart;
