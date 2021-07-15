var linearScale = d3.scaleLinear()
	.domain([-2.5,3.5])
	.range(["#FFFFFF","#FF2D00"]);

// var sequentialScale = d3.scaleSequential()
// 	.domain([0, 100])
// 	.interpolator(d3.interpolateRainbow);

var myData = [-2.5,-1,0.5,2,3.5];

d3.select('#wrapper')
	.selectAll('circle')
	.data(myData)
	.enter('circle')
	.attr('r', 10)
	.attr('cx', function(d) {
		return linearScale(d);
	})
	.style('fill', function(d) {
		return linearScale(d);
	});

