var Barchart = (function(){

    let svg,
        margin = {top: 50, right: 50, bottom: 50, left: 50},
        width = $("#scatterplot").width(),
        height = $("#scatterplot").height();
    
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];   
    // The number of olympics
    const n = month.length;
        
    // linear xScale to position the dots (not the axis)
    const xScale = d3.scaleLinear()
        .domain([0, n-1])
        // .range([1, 12]);
        .range([0, width-100]);

    // point scale to draw the X axis
    const xAxisScale = d3.scalePoint()
        .domain(month)
        // .domain(["January","February","March","April","May","June","July","August","September","October","November","December"]) // input
         .range([0, width-100]);
        // .range([1, 12]);

    // Yscale will use the max number of medals possible
    const yScale = d3.scaleLinear()
        .range([height-100, 0]);

    const xAxis = d3.axisBottom(xAxisScale)
        .tickValues(xAxisScale.domain().filter((d, i) => !(i % 2)))

            // dots tooltip
    const tip = d3.tip()
            .attr('class', 'd3-tip')
            // .direction('e')
            .offset([-10, 0])
            .html(d => {
                return d.value.TotalMedals != 0? "<strong>" + d.value.TotalMedals.toFixed(3) + " &#8451</strong> Temperature Difference in <strong>" + month[d.key-1] + "</strong>":"No Data";
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
                        "TotalMedals" : d3.sum(values, d => parseFloat(d.TotalMedals)) 
                    };
                })
                .map(data);
            // console.log(processedData);
                // console.log(processedData.get("WLD").get(yearFilter.initial).entries());
                // console.log(processedData.get("WLD").get(yearFilter.initial));

            yScale.domain([-2.5, 2.5]);
            svg = d3.select("#scatterplot")
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
                .text("Months");

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
            svg.append("text")
                .attr("x", ((width / 2)-50))             
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text("Temperature change by Month");
 

                // Create 4 line Entitities
                for(i = 0; i < 4; i++) {
                    // Line.
                    svg.append("path")
                        .datum(processedData.get("WLD").get(yearFilter.initial).entries()/*.sort(descending)*/)
                        .attr("class", d => "line id" + i + (i == 0 ? "" : " hidden"))
                        .attr("stroke","Red" /*d => getColor(countrySelection[0])*/)
                        .attr("d", line);
                    
                // Dots in Line.
                svg.selectAll(".dot id" + i)
                    .data(processedData.get("WLD").get(yearFilter.initial).entries()/*.sort(descending)*/)
                    .enter().append("circle")
                    .attr("class", d => "dot id" + i + (i == 0 ? "" : " hidden"))
                    .attr("fill","Red"/* d => d3.rgb(getColor("WLD"))*/)
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
                            .attr("stroke-width", 1);
                    });
                }
            });
        }

        /**
     * Updates the Linechart according to the filters. 
     */
         var update = function() {
            d3.csv("csv/BarChartData.csv").then(data => {
                data.forEach(d => {
                    d.Year = +d.Year;
                    d.MonthCode =+d.MonthCode;
                    d.TotalMedals = +d.temperature;
                });
    
                let processedData = d3.nest()
                .key(d => d.Country)
                .key(d => d.Year)
                .key(d => d.MonthCode)
                .rollup(values => {
                    return {
                        "TotalMedals" : d3.sum(values, d => parseFloat(d.TotalMedals)) 
                    };
                })
                .map(data);
                var min=10;
                var max =-10;
                countrySelection.forEach((country, i) => {
                    if(getNumberOfCountriesInSelection() == 0)
                    {
                        min=-2;
                        max = 2;
                        return;
                    }
                    // Skip null elements and hide them.
                    if(country === null) { 
                        return; 
                    }
                     // Readjust the Y Scale.
                if(max < d3.max(processedData.get(country).get(yearFilter.initial).entries(), function(d) { return d.value.TotalMedals; })){
                    max = d3.max(processedData.get(country).get(yearFilter.initial).entries(), function(d) { return d.value.TotalMedals; });
                }

                if(min > d3.min(processedData.get(country).get(yearFilter.initial).entries(), function(d) { return d.value.TotalMedals; })){
                    min = d3.min(processedData.get(country).get(yearFilter.initial).entries(), function(d) { return d.value.TotalMedals; });
                }
                    // // console.log(d3.extent(processedData.get(country).get(yearFilter.initial).entries())/*[1].value.TotalMedals*/);
                    // console.log((processedData.get(country).get(yearFilter.initial).entries()))/*[1].value.TotalMedals*/;
                    // if(d3.extent(processedData.get(country).get(yearFilter.initial).entries())[1].value > max)
                    // {
                    //     max = d3.extent(processedData.get(country).get(yearFilter.initial).entries()[1].value);
                    // }
                    // if(d3.extent(processedData.get(country).get(yearFilter.initial).entries())[0].value < min)
                    // {
                    //     min = d3.extent(processedData.get(country).get(yearFilter.initial).entries()[0].value);
                    // }
                }); 
                max +=0.5;
                min -=0.5;
                yScale.domain([min, max]);
                // Update line generator for new values.
                let lineGenerator = d3.line()
                    .x((d, i) => xScale(i))
                    .y(d => yScale(d.value.TotalMedals)) 
                    .curve(d3.curveMonotoneX);
                    
                svg.select(".yAxis")
                    .transition().duration(animationTime)
                    .ease(d3.easeExp)
                    .call(d3.axisLeft(yScale));
    
                countrySelection.forEach((country, i) => {
                    
                    // Skip null elements and hide them.
                    if(country === null) { 
                        hideLine(i);
                        return; 
                    } 
    
                    svg.select(".line.id" + i)
                        .datum(processedData.get(country).get(yearFilter.initial).entries())
                        .transition().duration(animationTime)
                        .ease(d3.easeExp)
                        .attr("stroke", d => getColor(country))
                        .attr("d", lineGenerator);
    
                    svg.selectAll(".dot.id" + i)
                        .data(processedData.get(country).get(yearFilter.initial).entries())
                        .transition()
                        .duration(animationTime)
                        .ease(d3.easeExp)
                        .attr("cy", d => yScale(d.value.TotalMedals))
                        .attr("fill", d => {
                            return (checkIfYearInInterval(d.key) ? 
                                d3.rgb(getColor(country))
                                :  d3.rgb(getColor(country)).brighter());
                        })
                        .attr("opacity", d => (checkIfYearInInterval(d.key) ? 1 : 0.6))
                        .attr("r", 3/*d => (checkIfYearInInterval(d.key) ? 8 : 4)*/);
    
                        // Make line visible
                        showLine(i);
                });   
    
                /*If empty show world */
                if(getNumberOfCountriesInSelection() == 0) 
                {
                    svg.select(".line.id" + 0)
                    .datum(processedData.get("WLD").get(yearFilter.initial).entries().sort(descending))
                    .transition().duration(animationTime)
                    .ease(d3.easeExp)
                    .attr("stroke", "Red")
                    .attr("d", lineGenerator);
    
                svg.selectAll(".dot.id" + 0)
                    .data(processedData.get("WLD").get(yearFilter.initial).entries().sort(descending))
                    .transition()
                    .duration(animationTime)
                    .ease(d3.easeExp)
                    .attr("cy", d => yScale(d.value.TotalMedals))
                    .attr("fill", "Red"/*d => {
                        return (checkIfYearInInterval(d.key) ? 
                            d3.rgb(getColor(0))
                            :  d3.rgb(getColor(0)).brighter());
                    }*/)
                    .attr("opacity", d => (checkIfYearInInterval(d.key) ? 1 : 0.6))
                    .attr("r", 3/*d => (checkIfYearInInterval(d.key) ? 8 : 4)*/);
    
                    // Make line visible
                    showLine(0);
    
                }
            }) 
        };
        
    var hideLine = function(lineID) {
        d3.select("#scatterplot .line.id" + lineID).classed("hidden", true);
        d3.selectAll("#scatterplot .dot.id" + lineID).classed("hidden", true);
    }

    var showLine = function(lineID) {
        d3.select("#scatterplot .line.id" + lineID).classed("hidden", false)
        d3.selectAll("#scatterplot .dot.id" + lineID).classed("hidden", false);
    }

    return {
        initialize:initialize,
        update:update
    };

})();
