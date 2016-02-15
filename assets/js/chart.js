//Chart Configuration

//Width and height
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var w = windowWidth;
var h = windowHeight * 80 / 100;
var barPadding = windowWidth * 5 / 100;
var bottomRectHight = w * 3 / 100;
var y = d3.scale.linear()
    .range([h, 0])
    .domain([0, 100]); //since values vary between 0 and 100


//Create SVG element
var svg = d3.select(".chart-container")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("style", "display:none;");


//Draw static Rectangle for bottom
var rectangle = svg.append("rect")
		.attr("x", 0)
		.attr("y", h - bottomRectHight)
		.attr("width", w)
		.attr("height", bottomRectHight)
		.attr("fill", "rgb(250, 128, 114)");


// create inicial vis
function drawVis() {

    var uSel = svg.selectAll(".bar")
        .data(dataset);

    uSel.exit().remove();

    var gs = uSel
        .enter()
        .append("g")
        .attr("class", "bar");

    gs.append("rect")
        .attr("fill", "rgb(250, 128, 114)");

    gs.append("text")
				.attr("class", "percentage-label")
				.style("fill", "black")
				.style("font-size", "2.5em")
				.attr("x", function(d, i) {
            return i * (w / dataset.length) + 2.5 / 100 * w + w * 8/100;
        });

    uSel.select("rect")
        .attr("x", function(d, i) {
            return i * (w / dataset.length) + 2.5 / 100 * w;
        })
        .attr("width", w / dataset.length - barPadding)
        .attr("height", y(0))
        .transition().duration(1750).ease("linear")
        .attr("y", function(d) {
            return y(d);
        })
        .attr("height", function(d) {
            return h - y(d);
        });

    uSel.select("text")
				.transition().duration(1750).ease("linear")
				.attr("y", function(d) {
					var pos;
					if (d <= 26){
						pos = y(8) + h* 6/100;
					}else {
						pos = y(d) + h* 6/100;
					}
						return pos;
				})
        .tween("text", function(d) {
					 var i = d3.interpolate(this.textContent.replace('%', ''), d);
					 return function(t) {
            this.textContent = Math.round(i(t)) + "%";
        	};
				});
}
