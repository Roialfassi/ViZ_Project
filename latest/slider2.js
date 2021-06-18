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

var dispatch = d3.dispatch("sliderChange");

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
    .attr("class", "track-overlay");

    var sliderTray = slider.append("div")
    .attr("class", "slider-tray");

    var sliderHandle = slider.append("div")
    .attr("class", "slider-handle");

    sliderHandle.append("div")
    .attr("class", "slider-handle-icon")

    slider.call(d3.behavior.drag()
    .on("dragstart", function() {
      dispatch.sliderChange(x.invert(d3.mouse(sliderTray.node())[0]));
      d3.event.sourceEvent.preventDefault();
    })
    .on("drag", function() {
      dispatch.sliderChange(x.invert(d3.mouse(sliderTray.node())[0]));
    }));

    dispatch.on("sliderChange.slider", function(value) {
        sliderHandle.style("left", x(value) + "px")
      });
