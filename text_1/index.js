var svgContainer = d3.select("body")
	.append("svg").attr("width","200").attr("height","200")
	.style('border', '1px solid black');
	svgContainer.append("circle").attr("cx",100).attr("cy",100).attr("r",20).style("fill","black");

var svgText = svgContainer.append("text");
	svgText.attr("x",50).attr("y",50);
	svgText.text('circle')