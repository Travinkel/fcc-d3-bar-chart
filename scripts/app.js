const d3 = await import("d3");

// Included for completeness but not used
const projectName = 'bar-chart';

d3.select("#visHolder").append("g").attr("id", "x-axis");
d3.select("#visHolder").append("g").attr("id", "y-axis");