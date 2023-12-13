export const lineChartData = [
  {
    name: 'Mobile apps',
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
  },
  {
    name: 'Websites',
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
  }
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    theme: 'dark'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      style: {
        colors: '#A098AE',
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#A098AE',
        fontSize: '12px'
      }
    }
  },
  legend: {
    show: false
  },
  grid: {
    strokeDashArray: 5
  },
  colors: ['#fff', '#3182CE']
};
