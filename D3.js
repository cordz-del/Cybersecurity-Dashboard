<!-- index.html snippet for D3 chart -->
<div id="lineChart"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  // Sample dynamic data (should be replaced with real-time data fetching)
  const data = [
    { time: new Date(2025, 2, 13, 9, 0), value: 10 },
    { time: new Date(2025, 2, 13, 10, 0), value: 15 },
    { time: new Date(2025, 2, 13, 11, 0), value: 12 },
    { time: new Date(2025, 2, 13, 12, 0), value: 18 },
    { time: new Date(2025, 2, 13, 13, 0), value: 20 }
  ];

  const margin = { top: 20, right: 30, bottom: 30, left: 40 },
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

  const svg = d3.select("#lineChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
   .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime().domain(d3.extent(data, d => d.time)).range([0, width]);
  const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height, 0]);

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#36A2EB")
    .attr("stroke-width", 2)
    .attr("d", d3.line().x(d => x(d.time)).y(d => y(d.value)));
</script>
