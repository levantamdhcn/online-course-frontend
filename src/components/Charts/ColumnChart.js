import React from 'react';
import Chart from 'react-apexcharts'

const ColumnChart = ({ chartData, options }) => {
  if(!options) return;
  return (
    <Chart
      options={options}
      series={chartData}
      type="bar"
      width="100%"
      height="376px"
    />
  );
};

export default ColumnChart;
