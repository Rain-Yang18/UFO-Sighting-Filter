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
var form = d3.selectAll("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  d3.event.preventDefault();

  var date_input = d3.select("#datetime");
  var city_input = d3.select("#city");

  // console.log(input);

  var date_inputValue = date_input.property("value");
  var city_inputValue = city_input.property("value");


  // console.log(inputValue);

  // If the date form is not empty the table will display search result
  if (date_inputValue !== "" || city_inputValue !== "") {

    // One filter
    if (date_inputValue !== "" && city_inputValue === "") {
      var filterData = tableData.filter(x => x.datetime === date_inputValue);
    }
    
    else if (date_inputValue === "" && city_inputValue !== "") {
      var filterData = tableData.filter(x => x.city === city_inputValue);
    }
  
    else {
      var filterData = tableData.filter(x => x.datetime === date_inputValue && x.city === city_inputValue);
    }

    console.log(filterData);

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
  }
};