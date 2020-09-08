const ctx = document.querySelector("#lineChart");
const ctx2 = document.querySelector("#barChart");
const ctx3 = document.querySelector("#radarChart");
const ctx4 = document.querySelector("#donutChart");
const title = document.querySelector(".title");

let months = ["January", "February", "March", "April", "May", "June", "July"];

Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.animation.onComplete = () => {
    title.classList.add('show')
}
let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: "2019",
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [65, 59, 67, 45, 67, 55, 56]
            },
            {
                label: "2020",
                lineTension: 0,
                backgroundColor: "rgba(80,70,40,0.5)",
                data: [45, 67, 34, 67, 55, 76, 56]
            }
        ]
    },
    options: {
        showLines: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                label: "2019",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [65, 59, 67, 45, 67, 55, 56]
            },
            {
                label: "2020",
                lineTension: 0,
                backgroundColor: "rgba(80,70,40,0.5)",
                data: [45, 67, 34, 67, 55, 76, 56]
            }
        ]
    },
    options: {
        showLines: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let radarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: months,
        datasets: [
            {
                label: "2019",
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [65, 59, 67, 45, 67, 55, 56]
            },
            {
                label: "2020",
                lineTension: 0,
                backgroundColor: "rgba(80,70,40,0.5)",
                data: [45, 67, 34, 67, 55, 76, 56]
            }
        ]
    },
    options: {
        showLines: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let donutChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["red", "orange", "yellow"],
        datasets: [
            {
                label: "Favorite Color",
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [50, 25, 25]
            }
        ]
    },
    options: {
        showLines: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});