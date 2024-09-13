const xValues = ['Design', 'Artist', 'Unity', 'Unreal Engine', 'Animator'];
const yValues = [30000, 16000, 10000, 1500, 700];
const barColors = '#54A6E9';

new Chart('myChart', {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
    },
  },
});
