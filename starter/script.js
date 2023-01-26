// This function sets the initial background color of all the time blocks to white
function setInitialColors() {
  for (var i = 9; i <= 17; i++) {
    $("#colorTime" + (i)).css({ "backgroundColor": "white" });
  }
}
// This function updates the background color of the time blocks based on the current hour
function updateColors() {
  // Get the current hour
  var currentHour = moment().hours();
  // Loop through all the hours from 9 to 17
  for (var i = 9; i <= 17; i++) {
    // If the current hour is equal to the hour we're looping through
    // Set the background color of the corresponding time block to green
    if (i === currentHour) {
      $("#colorTime" + (i)).css({ "backgroundColor": "green" });
      // If the current hour is less than the hour we're looping through
      // Set the background color of the corresponding time block to red
    } else if (i < currentHour) {
      $("#colorTime" + (i)).css({ "backgroundColor": "red" });
    }
    // If the current hour is greater than the hour we're looping through
    // Set the background color of the corresponding time block to aliceblue
    else {
      $("#colorTime" + (i)).css({ "backgroundColor": "aliceblue" });
    }
  }
}
// Call the setInitialColors function to set the initial background color of all the time blocks
setInitialColors();
// Call the updateColors function every 1000 milliseconds to update the background color
window.setInterval(updateColors, 1000);
// This function saves the text inside the text area with the id "plan-col-{hour}" to local storage
function saveText(hour) {
  var text = $("#plan-col-" + hour).html();
  localStorage.setItem("colorTime" + hour, text);
}
// This function displays the text saved in local storage for a specific hour
function displayText(hour) {
  var text = localStorage.getItem("colorTime" + hour);
  $("#plan-col-" + hour).html(text);
}

// When the page has fully loaded, loops through  and calls the displayText function to each iteration.
// Displays the rtext in the correspnding text area
$(document).ready(function () {
  for (var i = 9; i <= 17; i++) {
    displayText(i);
  }
});

// This function adds a click event listener to the save button with the id "save-col-{hour}"
function addSaveListener(hour) {
  $("#save-col-" + hour).click(function () {
    saveText(hour);
  });
}


// Here, you can call the addSaveListener function for each hour that you want to add a click event listener to
addSaveListener(9);
addSaveListener(10);
addSaveListener(11);
addSaveListener(12);
addSaveListener(13);
addSaveListener(14);
addSaveListener(15);
addSaveListener(16);
addSaveListener(17);