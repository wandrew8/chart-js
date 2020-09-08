const ctx = document.querySelector("#lineChart");
const ctx2 = document.querySelector("#barChart");

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
                label: "First Line Chart",
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [65, 59, 67, 45, 67, 55, 56]
            },
            {
                label: "Second Line Chart",
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
                label: "First Line Chart",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(50,45,100,0.5)",
                data: [65, 59, 67, 45, 67, 55, 56]
            },
            {
                label: "Second Line Chart",
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

