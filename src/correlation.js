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
var data_test = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: ' °C',
        data: [12, 19, 3, 5, 2, 3] ,
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        fill: false,
        borderWidth: 1,
        pointBackgroundColor:[
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
        ],
        pointBorderColor:[
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
        ],
        pointBorderWidth:1,
        pointRadius:2
    }]
};

var option_test = {
    scales: {
      xAxes: [{
            type: 'category',
            labels: ['January', 'February', 'March', 'April', 'May', 'June']
        }],
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

var ctx = document.getElementById("temperatureChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: data_test,
    options: option_test
});

/* var ctx2 = document.getElementById("temperatureChart2").getContext('2d');

rs = new RangeSliderChart({

  chartData: data_test,
  chartOpts: option_test,
  chartType: 'line',
  chartCTX: ctx2,

  class: 'my-chart-ranger',
  initial:[1,6]
});*/

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});
/* d3.select('#slider').call(d3.slider().axis(true).value( [ 10, 25 ] ).on("slide", function(evt, value) {
  d3.select('#slidertextmin').text(value[ 0 ]);
  d3.select('#slidertextmax').text(value[ 1 ]);
}));*/
