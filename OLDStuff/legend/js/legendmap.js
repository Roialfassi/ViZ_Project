// var linear = d3.scaleLinear()
//   .domain([0,10])
//   .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);
var myColor = d3.scaleLinear().domain([-2,3.5])
.range(["#FFFFFF","#FF2D00"])
var svg = d3.select("svg");

svg.append("g")
  .attr("class", "legendLinear")
  .attr("transform", "translate(20,20)");

var legendLinear = d3.legendColor()
  .shapeWidth(30)
  .orient('horizontal')
  .scale(linear);

svg.select(".legendLinear")
  .call(legendLinear);

// var svg = d3.select("#svg-color-quant");

// var quantize = d3.scaleQuantize()
//     .domain([ 0, 0.15 ])
//     .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

// svg.append("g")
//   .attr("class", "legendQuant")
//   .attr("transform", "translate(20,20)");

// var colorLegend = d3.legendColor()
//     .labelFormat(d3.format(".2f"))
//     .useClass(true)
//     .scale(quantize);

// svg.select(".legendQuant")
//   .call(colorLegend);

// var color = d3.scaleLinear()
//   .domain([0.1, 0.18, 0.26, 0.33, 0.41])
//   .range(["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"]);

// d3
//   .select("body")
//   .append("svg")
//   .attr("class", "legend");

// var legend = d3.legendColor()
//   .shapeHeight(10)
//   .shapeWidth(50)
//   .shapePadding(0)
//   .labelOffset(5)
//   .labelFormat(d3.format("%"))
//   .orient("horizontal")
//   .labelAlign("start")
//   .scale(myColor);

// d3.select(".legend").call(legend);
