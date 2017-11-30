
var temp = [12, 19, 3, 5, 2, 3];
var co2 = [10, 5, 3, 3, 8, 9];
var months= ['January', 'February', 'March', 'April', 'May', 'June'];

d3.select("body")
          .append("div")
            .attr("id","slider");
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

var months_selected;
slider.noUiSlider.on('update', function( values, handle ) {
	 months_id_selected= slider.noUiSlider.get();;
   months_id_selected[1]= Number(months_id_selected[1]) + 1;

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
           pointBackgroundColor:'rgba(255,99,132,1)',
           pointBorderColor:'rgba(255,99,132,1)',
           pointBorderWidth:1,
           pointRadius:2
       }]
   };

   var data_test2 = {
       labels: months.slice(months_id_selected[0],months_id_selected[1]),
       datasets: [{
           label: 'kt',
           data: co2.slice(months_id_selected[0],months_id_selected[1]),
           borderColor:'rgba(99,255,132,1)',
           fill: false,
           borderWidth: 1,
           pointBackgroundColor:'rgba(99,255,132,1)',
           pointBorderColor:'rgba(99,255,132,1)',
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


   d3.select("body")
             .append("canvas")
               .attr("id","temperatureChart");

  d3.select("body")
            .append("canvas")
              .attr("id","CO2Chart");

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
