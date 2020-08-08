let myChart = document.getElementById("myChart").getContext("2d");
const day = [
  "day 0",
  "day 1",
  "Day 2",
  "day 4",
  "day 6",
  "day 8",
  "day 10",
  "day 12",
  "day 14",
  "day 15",
  "day 16",
  "day 18",
  "day 20",
  "day 22",
  "day 24",
  "day 26",
  "day 28",
  "day 29",
  "day 30",
];
const dataThisMonth = [
  0,
  20000,
  11000,
  28000,
  21000,
  40000,
  12000,
  48000,
  40000,
  32000,
  36000,
  23000,
  47000,
  32000,
  39500,
  30000,
  23000,
  39000,
  31000,
];

const dataLastMonth = [
  10000,
  29000,
  10500,
  28000,
  21000,
  39000,
  11500,
  29000,
  21000,
  30000,
  47000,
  30000,
  12000,
  20000,
  28000,
  20000,
  29000,
  20000,
  40000,
];

let lineChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: day,
    datasets: [
      {
        label: "This Month",
        data: dataThisMonth,
        borderColor: "#00F1FF",
        backgroundColor: "transparent",
      },
      {
        label: "Last Month",
        data: dataLastMonth,
        borderColor: "#FFB8C6",
        backgroundColor: "transparent",
      },
    ],
    option: {
      title: {
        display: true,
      },
      legend: {
        display: false,
        position: "right",
      },
    },
  },
});
