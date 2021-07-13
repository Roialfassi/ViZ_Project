/*var Linechart = (function(){

    let svg,
        margin = {top: 50, right: 50, bottom: 50, left: 50},
        width = $("#linechart").width(),
        height = $("#linechart").height();
    
    // The number of olympics
    const n = years.length;
        
    // linear xScale to position the dots (not the axis)
    const xScale = d3.scaleLinear()
        .domain([0, n-1])
        .range([0, width-100]);

    // point scale to draw the X axis
    const xAxisScale = d3.scalePoint()
        .domain(years) // input
        .range([0, width-100]);

    // Yscale will use the max number of medals possible
    const yScale = d3.scaleLinear()
        .range([height-100, 0]);

    const xAxis = d3.axisBottom(xAxisScale)
        .tickValues(xAxisScale.domain().filter((d, i) => !(i % 2)))

            // dots tooltip
    const tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(d => {
                return "<strong>" + d.value.TotalMedals.toFixed(3) + "</strong> Temperature Difference in <strong>" + d.key + "</strong>";
            });

    var initialize = function() {
        let line = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d.value.TotalMedals))
            .curve(d3.curveMonotoneX);
        
        d3.csv("csv/BarChartData.csv").then(data => {

            data.forEach(d => {
                d.Year = +d.Year;
                d.MonthCode =+d.MonthCode;
                d.TotalMedals = +d.temperature;
            });

            // Create a nested type data to sort the csv by country and year.
            let processedData = d3.nest()
                .key(d => d.Country)
                .key(d => d.Year)
                .key(d => d.MonthCode)
                .rollup(values => {
                    return {
                        "temperature" : d3.sum(values, d => parseFloat(d.TotalMedals)) 
                    };
                })
                .map(data);
            console.log(processedData);


            yScale.domain([-2, 3.5]);
            svg = d3.select("#linechart")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(tip);
            
            // X Axis.
            svg.append("g")
                .attr("class", "xAxis unselectable")
                .attr("transform", "translate(0," + (height - margin.left - margin.top) + ")")
                .call(xAxis);

            svg.append("text")
                .attr("class", "axislabel unselectable")
                .attr("transform", "translate(" + ((width / 2) - margin.right) + " ," + 
                                    (height - margin.left - margin.top+30) + ")")
                .style("text-anchor", "middle")
                .text("Years");

            // Y Axis
            svg.append("g")
                .attr("class", "yAxis unselectable")
                .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
            
            svg.append("text")
                .attr("class", "axislabel unselectable")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left + 5)
                .attr("x", 0 - (height / 2) + margin.right)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Temperature Change °C");

                // Create 4 line Entitities
                for(i = 0; i < 4; i++) {
                    // Line.
                    svg.append("path")
                        .datum(processedData.get("WLD").entries().sort(descending))
                        .attr("class", d => "line id" + i + (i == 0 ? "" : " hidden"))
                        .attr("stroke", d => getColor(countrySelection[0]))
                        .attr("d", line);
                    
                    // Dots in Line.
                    svg.selectAll(".dot id" + i)
                        .data(processedData.get("WLD").get(yearFilter.initial).sort(descending))
                        .enter().append("circle")
                        .attr("class", d => "dot id" + i + (i == 0 ? "" : " hidden"))
                        .attr("fill", d => d3.rgb(getColor("WLD")))
                        .attr("cx", (d, i) => xScale(i))
                        .attr("cy", d => yScale(d.value.TotalMedals))
                        .attr("r", 3)
                        .attr("stroke", d => getCSSColor('--main-dark-color'))
                        .attr("opacity", 1)
                        .on('mouseover', function(d){
                            tip.show(d);
                            d3.select(this).transition()
                                .ease(d3.easeElastic)
                                .duration(animationTime)
                                .attr("stroke", d => getCSSColor('--main-white-color'))
                                .attr("r", 12)
                                .attr("stroke-width", 2);
                        })
                        .on('mouseout', function(d){
                            tip.hide(d);
                            d3.select(this).transition()
                                .ease(d3.easeElastic)
                                .duration(animationTime)
                                .attr("stroke", d => getCSSColor('--main-dark-color'))
                                .attr("r",3 /* d => (checkIfYearInInterval(d.key) ? 8 : 4)*/)
                            /*    .attr("stroke-width", 1);
                        });
                }



            });
        }


})();
*/
*/*/