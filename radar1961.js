function showRadar(){
    var data = [];
    var chart = RadarChart.chart();
  
  var c = document.getElementById("data").value,
      w = document.getElementById("w").value,
      h = document.getElementById("h").value,
  csv = c.split("\n").map(function(i){return i.split(",")})
  headers = []
  csv.forEach(function(item, i){
    if(i==0){
      headers = item;
    }else{
      newSeries = {};
      item.forEach( function(v, j){
        if(j==0){
          newSeries.className = v;
          newSeries.axes = [];
        }else{
          newSeries.axes.push({"axis":[headers[j]], "value": parseFloat(v)});
        }
      });
      data.push(newSeries);
    }
  })
RadarChart.defaultConfig.radius = 3;
RadarChart.defaultConfig.w = w;
RadarChart.defaultConfig.h = h;
RadarChart.draw("#chart-container", data);
function animate(elem,time) {
    if( !elem) return;
    var to = elem.offsetTop;
    var from = window.scrollY;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            window.scrollTo(0,(from+step*(to-from))+1);
            if( step == 1){ clearInterval(timer);};
        },25);
        window.scrollTo(0,(from+1));
    }

var divVal = document.getElementById('chart-container');
animate(divVal,600);
}