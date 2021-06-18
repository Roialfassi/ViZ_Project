
var dataset1 = [];
var chart = RadarChart.chart();
  
var w = 600,
    h = 600;


function drawChart()
{
       d3.json("radar.json" ,function(data){
        console.log(data);
        RadarChart.defaultConfig.radius = 3;
        RadarChart.defaultConfig.w = w;
        RadarChart.defaultConfig.h = h;
        RadarChart.draw("#chart-container", data);
        });
}
function update(h) {
        d3.json("radar.json" ,function(data){
            console.log(data);
            var abc = filterData(data , h);
            console.log(abc);    
            RadarChart.defaultConfig.radius = 3;
            RadarChart.defaultConfig.w = w;
            RadarChart.defaultConfig.h = h;
            RadarChart.draw("#chart-container",abc);
            });
  }
  function filterData(d , h)
  {
    // return d.type == "className";
     return d.filter(function(item){
        //  console.log(item.className)
        return item.className == h;});

  }


  /* slider */
//   var width = 600;

//   var startDate = 1961,
//     endDate = 2019;

//   var x = d3.scale.linear()
//       .domain([startDate, endDate])
//       .range([0, width])
//       .clamp(true);

//   var dispatch = d3.dispatch("sliderChange");
  
//   var slider = d3.select(".slider")
//       .style("width", width + "px");
  
//   var sliderTray = slider.append("div")
//       .attr("class", "slider-tray");
  
//   var sliderHandle = slider.append("div")
//       .attr("class", "slider-handle");
  
  
//   sliderHandle.append("div")
//       .attr("class", "slider-handle-icon")
  
//   slider.call(d3.behavior.drag()
//       .on("dragstart", function() {
//         dispatch.sliderChange(x.invert(d3.mouse(sliderTray.node())[0]));
//         d3.event.sourceEvent.preventDefault();
//       })
//       .on("drag", function() {
//         dispatch.sliderChange(x.invert(d3.mouse(sliderTray.node())[0]));
//       }));
  
//   dispatch.on("sliderChange.slider", function(value) {
//     sliderHandle.style("left", x(value) + "px")
//   });
//   slider.insert("g", ".track-overlay")
//     .attr("class", "ticks")
//     .attr("transform", "translate(0," + 18 + ")")
//   .selectAll("text")
//     .data(x.ticks(10))
//     .enter()
//     .append("text")
//     .attr("x", x)
//     .attr("y", 10)
//     .attr("text-anchor", "middle")
//     .text(function(d) { return d; });
    
// var handle = slider.insert("circle", ".track-overlay")
//     .attr("class", "handle")
//     .attr("r", 9);

// var label = slider.append("text")  
//     .attr("class", "label")
//     .attr("text-anchor", "middle")
//     .text(startDate)
//     .attr("transform", "translate(0," + (-25) + ")")
/* slider */
// drawChart();
update(2019);
// console.log("dataset1 + "+ dataset1);
