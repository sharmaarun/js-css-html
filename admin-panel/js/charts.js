const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data,
  options: {
    // responsive: false,
  },
};

console.log(Chart);

const lineChart = document.getElementById("LINE_CHART_CONTAINER");
const lcChart = new Chart(lineChart, config);
