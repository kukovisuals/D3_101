/*
// DISPLAY JUST TEXT 01
var svgContainer = d3.select("body")
	.append("svg")
	.attr("width","200").attr("height","200")
	.style('border', '1px solid black');
	
var svgText = svgContainer.append("text");
	svgText.attr("x",50).attr("y",50);
	svgText.text('circle')

*/

const dataSet = [
	{"name":"Shanghai"        , "population":18, "rank": 1},
	{"name":"Guangzhou"       , "population":11, "rank":10},
	{"name":"Dongguan"        , "population": 8, "rank":20},
	{"name":"Cairo"           , "population": 7, "rank":30},
 	{"name":"Saint Petersburg", "population": 5, "rank":40},
	{"name":"New Taipei"      , "population": 4, "rank":50}
];

var svgContainer = d3.select("body")
	.append("svg")
	.attr("width","200").attr("height","200")
	.style('border', '1px solid black');

var circles = svgContainer.selectAll("circle")
	.data(dataSet).enter().append("circle");

	circles.attr("cx", (d,i) => (i + 1) * 25 )
    .attr("cy", (d,i) => (i + 1) * 25 )
    .attr("r" , (d,i) => d.population );