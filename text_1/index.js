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

// set up out svg container 
const svgContainer = d3.select("body")
	.append("svg")
	.attr("width","300").attr("height","200")
	// .style('border-style', 'inset');
	// .style('border', '1px solid white');
// select out circles and input the data for other elements
const circles = svgContainer.selectAll("circle")
	.data(dataSet).enter().append("circle");
//draw them circles and display a chosen value
	circles.attr("cx", (d,i) => (i + 1) * 25 )
    .attr("cy", (d,i) => (i + 1) * 25 )
    .attr("r" , (d,i) => d.population );
// select all text for all the given data that we need 
const circleLabels = svgContainer.selectAll("text")
	.data(dataSet).enter().append("text");
// with the appeneded text get their location 
	circleLabels.attr("x", (d,i) => (i + 1) * 25)
    .attr("y", (d,i) => (i + 1) * 25);
// from their location give me their names
  circleLabels.text( (d,i) => d.name);