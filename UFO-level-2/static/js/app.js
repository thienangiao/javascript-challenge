// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);


tableData.forEach((sightings) => {
  //Use d3 to append one table row `tr` for each weather report object
  var row = tbody.append("tr");
  //Use `Object.entries` to console.log each value
  Object.entries(sightings).forEach(([key, value]) => {
    //Use d3 to append 1 cell per weather report value
    var cell = row.append("td");
    //Use d3 to update each cell's text with values
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");
var button_clear = d3.select("#showall-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
button_clear.on("click", runRefresh);

// Complete the event handler function for Show All button
function runRefresh() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Reload
    window.location.reload(true);
  
  };

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Capture input values
  var dateInputValue = (d3.select("#datetime")).property("value");
  var cityInputValue = (d3.select("#city")).property("value").trim().toLowerCase(); 
  var stateInputValue = (d3.select("#state")).property("value").trim().toLowerCase(); 
  var countryInputValue = (d3.select("#country")).property("value").trim().toLowerCase(); 
  var shapeInputValue = (d3.select("#shape")).property("value").trim().toLowerCase();

  // from data.js
  var tableData = data;

  //Filter data
  if (cityInputValue+stateInputValue+countryInputValue+shapeInputValue === "" && dateInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.datetime === dateInputValue);
  }
  else if (stateInputValue+countryInputValue+shapeInputValue === "" && dateInputValue != "" && cityInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.datetime+selectrow.city === dateInputValue+cityInputValue);
  }
  else if (countryInputValue+shapeInputValue === "" && dateInputValue != "" && cityInputValue != "" && stateInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.datetime+selectrow.city+selectrow.state === dateInputValue+cityInputValue+stateInputValue);
  }
  else if (shapeInputValue === "" && dateInputValue != "" && cityInputValue != "" && stateInputValue != "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.datetime+selectrow.city+selectrow.state+selectrow.country 
      === dateInputValue+cityInputValue+stateInputValue+countryInputValue);
  }
  else if (shapeInputValue != "" && dateInputValue != "" && cityInputValue != "" && stateInputValue != "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.datetime+selectrow.city+selectrow.state+selectrow.country+selectrow.shape 
      === dateInputValue+cityInputValue+stateInputValue+countryInputValue+shapeInputValue);
  }

  else if (dateInputValue+stateInputValue+countryInputValue+shapeInputValue === "" && cityInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.city === cityInputValue);
  }
  else if (dateInputValue+countryInputValue+shapeInputValue === "" && cityInputValue != "" && stateInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.city+selectrow.state === cityInputValue+stateInputValue);
  }
  else if (dateInputValue+shapeInputValue === "" && cityInputValue != "" && stateInputValue != "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.city+selectrow.state+selectrow.country === cityInputValue+stateInputValue+countryInputValue);
  }
  else if (dateInputValue+shapeInputValue === "" && cityInputValue != "" && stateInputValue != "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.city+selectrow.state+selectrow.country === cityInputValue+stateInputValue+countryInputValue);
  } 
  else if (dateInputValue === "" && cityInputValue != "" && stateInputValue != "" && countryInputValue != "" && shapeInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.city+selectrow.state+selectrow.country +selectrow.shape=== cityInputValue+stateInputValue+countryInputValue+shapeInputValue);
  } 

  else if (dateInputValue+cityInputValue+countryInputValue+shapeInputValue === "" && stateInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.state === stateInputValue);
  }
  else if (dateInputValue+cityInputValue+shapeInputValue === "" && stateInputValue != "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.state+selectrow.country === stateInputValue+countryInputValue);
  }
  else if (dateInputValue+cityInputValue === "" && stateInputValue != "" && countryInputValue != "" && shapeInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.state+selectrow.country +selectrow.shape=== stateInputValue+countryInputValue+shapeInputValue);
  } 

  else if (dateInputValue+cityInputValue+stateInputValue+shapeInputValue === "" && countryInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.country === countryInputValue);
  }
  else if (dateInputValue+cityInputValue+stateInputValue === "" && countryInputValue != "" && shapeInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.country +selectrow.shape=== countryInputValue+shapeInputValue);
  } 

  else if (dateInputValue+cityInputValue+stateInputValue+countryInputValue === "" && shapeInputValue != "") {
    var filteredData = tableData.filter(selectrow => selectrow.shape === shapeInputValue);
  }

  else {
    var filteredData = tableData.filter(selectrow => selectrow.datetime === "");
  }
  
  // Console.log of the filtered data
  console.log(filteredData);
  
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  // clear table
  tbody.html("");
  
  filteredData.forEach((selecteddata) => {
    //Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");
    //Use `Object.entries` to console.log each value
    Object.entries(selecteddata).forEach(([key, value]) => {
      //Use d3 to append 1 cell per weather report value
      var cell = row.append("td");
      //Use d3 to update each cell's text with values
      cell.text(value);
    });
  });

};
