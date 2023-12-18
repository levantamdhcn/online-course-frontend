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

export const columnsOptions = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    labels: {
      style: {
        colors: '#A098AE',
        fontSize: '12px',
        width: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    }
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val
      }
    }
  }
}

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
  colors: ['#3182CE']
};

export const donutChartData = {
  series: [44, 55, 13, 33],
  labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}

export const donutOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#bcd4d4', '#a82e2e', '#6cc070', '#E91E63', '#FF9800'],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "80px",
            fontWeight: 900
          },
          total: {
            show: true,
            showAlways: true,
            fontSize: "0px",
            label: "",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            }
          }
        }
      }
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}
