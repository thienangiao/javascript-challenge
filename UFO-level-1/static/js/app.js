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
form.on("submit", runEnter);
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

  // from data.js
  var tableData = data;

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  var filteredData = tableData.filter(selectrow => selectrow.datetime === inputValue);

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
