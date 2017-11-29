// @flow
/*const width = window.innerWidth;
const height = window.innerHeight;

// svg for the correlation chart
const svg = d3.select("body")
    .append("svg")
    .attr("id", "correlation")
    .attr("viewBox", "0 0 " + width + " " + height )
    .attr("preserveAspectRatio", "xMidYMid meet")
    .on("click", stopped, true);

var g = svg.append("g");

//data temperature

d3.csv("data/output.csv", function(data) {
});*/

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/* d3.select('#slider').call(d3.slider().axis(true).value( [ 10, 25 ] ).on("slide", function(evt, value) {
  d3.select('#slidertextmin').text(value[ 0 ]);
  d3.select('#slidertextmax').text(value[ 1 ]);
}));*/
