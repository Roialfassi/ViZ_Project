var startDate = 1961,
    endDate = 2019;

var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 600 - margin.left - margin.right,
height = 270 - margin.top - margin.bottom;

var svgSlider = d3.select("#slider")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height);

var x = d3.scale.linear()
    .domain([startDate, endDate])
    .range([0, width]);
    // .clamp(true);

var slider = svgSlider.append("g")
.attr("class", "slider")
.attr("transform", "translate(" + margin.left + "," + height / 2 + ")");
    slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.behavior.drag());
        // .on("start.interrupt", function() { slider.interrupt(); })
        // .on("start drag", function() { update(x.invert(d3.event.x)); }));

slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
    .data(x.ticks(10))
    .enter()
    .append("text")
    .attr("x", x)
    .attr("y", 10)
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });
    
var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

var label = slider.append("text")  
    .attr("class", "label")
    .attr("text-anchor", "middle")
    .text(formatDate(startDate))
    .attr("transform", "translate(0," + (-25) + ")")
