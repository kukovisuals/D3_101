
const dataSet = [
	{"name":"Shanghai"        , "population":18, "rank": 1},
	{"name":"Guangzhou"       , "population":11, "rank":10},
	{"name":"Dongguan"        , "population": 8, "rank":20},
	{"name":"Cairo"           , "population": 7, "rank":30},
 	{"name":"Saint Petersburg", "population": 5, "rank":40},
	{"name":"New Taipei"      , "population": 4, "rank":50}
];

const w = 200
const h = 200

// give it spacing with data part 3
let xScale = d3.scaleBand()
 .domain(d3.range(dataSet.length))
 .range([0, w])
 .paddingInner(0.05)

const yScale = d3.scaleLinear()
 .domain([0,d3.max(dataSet, d => d.population )])
 .range([0, h])

const svg = d3.select("body") 
     .append("svg")
     .attr("width", w)
     .attr("height", h)

   //Create Bars part 1 
    svg.selectAll("rect")
      .data(dataSet)
      .enter() 
      .append("rect")     
      .attr("x", (d, i) => xScale(i) )
      .attr("y", d => h - yScale(d.population) )
      .attr("width", xScale.bandwidth)
      .transition()
      .duration(1000)   
      .attr("height", d => yScale(d.population))
      .attr("fill", d => "rgb(63, 188, 253)" )

   //Create Bars part 2
  d3.selectAll("rect")
	  .on("mouseover", function(d) {
	    //Get this bar's x/y values, then augment for the tooltip
	    const xPosition = parseFloat(d3.select(this).attr("x")) + xScale.bandwidth() / 2;
	    const yPosition = parseFloat(d3.select(this).attr("y")) + 14;
	    // console.log(d3.select(this))
	    //Create the tooltip label
	    svg.append("text")
	    	.data(dataSet)
	       .attr("id", "tooltip")
	       .attr("x", xPosition)
	       .attr("y", yPosition)
	       .attr("text-anchor", "middle")
	       .attr("font-size", "16px")
	       .attr("font-weight", "bold")
	       .attr("fill", "black")
	       .text( d => d.name)
	   })
	  .on("mouseout", function() {
	    //Remove the tooltip
	    d3.select("#tooltip").remove();
	    
	   })

