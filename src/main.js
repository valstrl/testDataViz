
//recover data
var temperature = [12, 19, 3, 5, 2, 3];
var co2 = [10, 5, 3, 3, 8, 9];
var months= ['January', 'February', 'March', 'April', 'May', 'June'];

var slider = document.getElementById('slider');

//slider
noUiSlider.create(slider, {
 start: [0, Math.round(months.length/2), months.length -1],
 connect: [false,true, true,false],
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

//function to add string label to the pips
function changePipLabel(idSlider,months){
  for (i = 0; i < months.length  ; i++) {
    change_label= vsprintf('#%s > div.noUi-pips.noUi-pips-horizontal > div:nth-child(%d)', [idSlider, 2*i + 2]);
    $(change_label).text(months[i]);
}
};
changePipLabel('slider', months);

//add and update graphs when slider in updated
var months_selected;
slider.noUiSlider.on('update', function( values, handle ) {

	 months_id_selected= slider.noUiSlider.get();;
   months_id_selected[1]= Number(months_id_selected[1]) ;
   months_id_selected[2]= Number(months_id_selected[2]) + 1; // recover id of months selected

   //create graph for temperatureChart
   color_temperature='rgba(255,99,132,1)';
   label_temperature= ' °C';
   idLineChart_temperature="temperatureChart";
   //canvas for temperature chart
   d3.select("#panel")
             .append("canvas")
               .attr("id",idLineChart_temperature);
   makeLineChart(temperature, months, months_id_selected, color_temperature, label_temperature, idLineChart_temperature)

   // function create graph for temperatureChart
   color_co2='rgba(99,255,132,1)';
   label_co2= ' kt';
   idLineChart_co2="CO2Chart";
   d3.select("#panel")
             .append("canvas")
               .attr("id",idLineChart_co2);
   makeLineChart(co2, months, months_id_selected, color_co2, label_co2, idLineChart_co2)

});

function makeLineChart(dataset, months, months_id_selected, color, label, idLineChart){
var data = {
    labels: months.slice(months_id_selected[0],months_id_selected[2]),
    datasets: [{
        label: label,
        data: dataset.slice(months_id_selected[0],months_id_selected[2]),
        borderColor: color,
        fill: false,
        borderWidth: 1,
        pointBackgroundColor:color,
        pointBorderColor:color,
        pointBorderWidth:1,
        pointRadius:2
    },
    {

        data: [{
          x:months[months_id_selected[1]],
          y: dataset[months_id_selected[1]]
        }],
        pointBackgroundColor:'rgba(255,0,0,1)',
        pointBorderColor:'rgba(255,0,0,1)',
        pointBorderWidth:2,
        pointRadius:4,
        type: 'scatter',


  }]
};

var option = {
    scales: {
      xAxes: [{
            type: 'category',
            labels: months.slice(months_id_selected[0],months_id_selected[2])
        }],
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

var ctx = document.getElementById(idLineChart);
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: option
});

}
