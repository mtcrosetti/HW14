// from data.js
var tableData = data;
// // console.log(tableData); <--- to get column names of array

var tbody = d3.select("tbody");

data.forEach((UFOsight) => {
    var row = tbody.append("tr");
    Object.entries(UFOsight).forEach(([key, value]) => {
        console.log(key, value)
        var cell = row.append("td");
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    tbody.selectAll("td").remove();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(data => data.datetime === inputValue);
    filteredData.forEach((UFOsight) => {
        var row = tbody.append("tr");
        Object.entries(UFOsight).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
 });
