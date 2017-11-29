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

d3.select('#slider').call(d3.slider().axis(true).value( [ 10, 25 ] ).on("slide", function(evt, value) {
  d3.select('#slidertextmin').text(value[ 0 ]);
  d3.select('#slidertextmax').text(value[ 1 ]);
}));
