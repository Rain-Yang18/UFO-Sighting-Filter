// from data.js
var tableData = data;

// Import the data into tables
var tbody = d3.select("tbody");

tableData.forEach(function(record) {
   // console.log(record);
   var row = tbody.append("tr");
   Object.entries(record).forEach(function([key, value]) {
     // console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
});


// Button & form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  d3.event.preventDefault();

  var input = d3.select("#datetime");

  // console.log(input);

  var inputValue = input.property("value");

  // console.log(inputValue);

  // If the form is not empty the table will display search result
  if (inputValue !== "") {
    var filterData = tableData.filter(date => date.datetime === inputValue);

    tbody.html("");
  
    filterData.forEach(function(search) {
      console.log(search);
      var row = tbody.append("tr");
      Object.entries(search).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

  // If we delete the date entered in the form - empty, the table will display all tableData
  else {
    tbody.html("");
    tableData.forEach(function(record) {
      // console.log(record);
      var row = tbody.append("tr");
      Object.entries(record).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
   });
  };
  

};