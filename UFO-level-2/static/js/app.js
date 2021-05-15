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
  var state_input = d3.select("#state");
  var country_input = d3.select("#country");
  var shap_input = d3.select("#shape");

  // console.log(input);

  var date_inputValue = date_input.property("value");
  var city_inputValue = city_input.property("value");
  var state_inputValue = state_input.property("value");
  var country_inputValue = country_input.property("value");
  var shape_inputValue = shap_input.property("value");

  // Creating if statement for the filters to work
  var filteredData=tableData;
    if (date_inputValue){
        filteredData = filteredData.filter(x => x.datetime === date_inputValue); 
    }
    if (city_inputValue){
        filteredData = filteredData.filter(x => x.city === city_inputValue);       
    }
    if (state_inputValue){
        filteredData = filteredData.filter(x => x.state === state_inputValue);       
    }
    if (country_inputValue){
        filteredData = filteredData.filter(x => x.country === country_inputValue);       
    }
    if (shape_inputValue){
        filteredData = filteredData.filter(x => x.shape === shape_inputValue);       
    }
  
  // Printing the filtered data
  console.log(filteredData);

  if (date_inputValue !== "" || city_inputValue !=="" || state_inputValue !=="" || country_inputValue !=="" || shape_inputValue !=="")
  {
    tbody.html("");

    filteredData.forEach((search) => {
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