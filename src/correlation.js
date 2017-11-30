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

var temp = [12, 19, 3, 5, 2, 3];
var co2 = [10, 5, 3, 3, 8, 9];
var months= ['January', 'February', 'March', 'April', 'May', 'June'];
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
 start: [0, months.length -1],
 connect: true,
 step:1,
 range: {
   'min': 0,
   'max':months.length -1,
 }
});

   var data_test = {
       labels: months,
       datasets: [{
           label: ' °C',
           data: temp,
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

   var data_test2 = {
       labels: months,
       datasets: [{
           label: 'kt',
           data: co2,
           borderColor: [
               'rgba(99,255,132,1)'
           ],
           fill: false,
           borderWidth: 1,
           pointBackgroundColor:[
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderColor:[
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderWidth:1,
           pointRadius:2
       }]
   };

   var option_test = {
       scales: {
         xAxes: [{
               type: 'category',
               labels: months
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

   var ctx2 = document.getElementById("CO2Chart");
   var myChart = new Chart(ctx2, {
       type: 'line',
       data: data_test2,
       options: option_test
   });

var months_selected;
slider.noUiSlider.on('update', function( values, handle ) {
	 months_id_selected= slider.noUiSlider.get();;
   /*console.log(months_id_selected);*/

   var data_test = {
       labels: months.slice(months_id_selected[0],months_id_selected[1]),
       datasets: [{
           label: ' °C',
           data: temp.slice(months_id_selected[0],months_id_selected[1]),
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

   var data_test2 = {
       labels: months.slice(months_id_selected[0],months_id_selected[1]),
       datasets: [{
           label: 'kt',
           data: co2.slice(months_id_selected[0],months_id_selected[1]),
           borderColor: [
               'rgba(99,255,132,1)'
           ],
           fill: false,
           borderWidth: 1,
           pointBackgroundColor:[
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderColor:[
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderWidth:1,
           pointRadius:2
       }]
   };

   var option_test = {
       scales: {
         xAxes: [{
               type: 'category',
               labels: months.slice(months_id_selected[0],months_id_selected[1])
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

   var ctx2 = document.getElementById("CO2Chart");
   var myChart = new Chart(ctx2, {
       type: 'line',
       data: data_test2,
       options: option_test
   });

});








 /*var ctx2 = document.getElementById("temperatureChart2").getContext('2d');*/
/*rs = new RangeSliderChart({

  chartData: data_test,
  chartOpts: option_test,
  chartType: 'line',
  chartCTX: ctx2,
  initial:[0,5]
});*/




/* d3.select('#slider').call(d3.slider().axis(true).value( [ 10, 25 ] ).on("slide", function(evt, value) {
  d3.select('#slidertextmin').text(value[ 0 ]);
  d3.select('#slidertextmax').text(value[ 1 ]);
}));*/
