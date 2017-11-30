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
 },
  pips: {
    mode: 'values',
		values: [...Array(months.length).keys()],
    density: 25,
    stepped: true
	}
});

// Alter the pip labels (and modify/add the middle one)
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(2)').text(months[0]);
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(4)').text(months[1]);
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(6)').text(months[2]);
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(8)').text(months[3]);
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(10)').text(months[4]);
$('#slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(12)').text(months[5]);

  /*.removeClass('noUi-marker-normal')
  .addClass('noUi-marker-large')
  .append('<div class="noUi-value noUi-value-horizontal noUi-value-large" style="left: 50.00000%">Fair</div>');
$('slider > div.noUi-pips.noUi-pips-horizontal > div:nth-child(7)').text(months[months.length-1]);*/


// Slider event handlers
slider.noUiSlider.on('slide', function (values, handle) {
  // Array of score names
  var rating_names = months;

  // Get rounded value
  var value = Math.round(values[handle]);

  // Get score name to show in tool-tip
  var text = rating_names[value - 1];

  // Set hidden field to value
  $('#rating_id').val(value);


  // Show score name in tool-tip
  $('#rating-tip').text(text).removeClass('hidden');
});


// Function to hide the tool-tip again after a timeout
slider.noUiSlider.on('change', function (values, handle) {
  setTimeout(function () {
    $('#rating-tip').addClass('hidden');
  }, 500);
});


/*import { NouiFormatter } from "lib/ng2-nouislider";*/

/*export class MyFormatter implements DefaultFormatter {
  private strings: string[] = [
    'abc', 'dfg', 'hij', 'klm', 'nop', 'qrs'
  ];

  to(value: number): string {
    value = Math.round(value);
    if (value < 0) {
      value = 0;
    }
    if (value >= this.strings.length) {
      value = this.strings.length - 1;
    }
    return this.strings[value];
  }

  from(value: string): number {
    let result = this.strings.indexOf(value);
    return result == -1 ? 0 : result;
  }
}*/




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
               'rgba(255,99,132,1)',
               'rgba(255,99,132,1)'
           ],
           pointBorderColor:[
               'rgba(255,99,132,1)',
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
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderColor:[
               'rgba(99,255,132,1)',
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
   months_id_selected[1]= Number(months_id_selected[1]) + 1;
   console.log(months_id_selected);
   console.log(months.slice(months_id_selected[0],months_id_selected[1]));

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
               'rgba(255,99,132,1)',
               'rgba(255,99,132,1)'
           ],
           pointBorderColor:[
               'rgba(255,99,132,1)',
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
               'rgba(99,255,132,1)',
               'rgba(99,255,132,1)'
           ],
           pointBorderColor:[
               'rgba(99,255,132,1)',
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
