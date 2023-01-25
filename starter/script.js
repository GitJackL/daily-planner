function setInitialColors() {
  for (var i = 9; i <= 17; i++) {
    $("#colorTime" + (i)).css({"backgroundColor": "aliceblue"});
  }
}

function updateColors() {
  var currentHour = moment().hours();
  
  for (var i = 9; i <= 17; i++) {
    if (i === currentHour) {
      $("#colorTime" + (i)).css({"backgroundColor": "green"});
    } else if(i < currentHour) {
      $("#colorTime" + (i)).css({"backgroundColor": "red"});
    }
    else{
        $("#colorTime" + (i)).css({"backgroundColor": "aliceblue"});
    }
  }
}

setInitialColors();
window.setInterval(updateColors, 1000);

function saveText(hour) {
  var text = $("#plan-col-" + hour).html();
  localStorage.setItem("colorTime" + hour, text);
}

function displayText(hour) {
  var text = localStorage.getItem("colorTime" + hour);
  $("#plan-col-" + hour).html(text);
}



function addSaveListener(hour) {
  $("#save-col-" + hour).click(function() {
    saveText(hour);
  });
}

$(document).ready(function() {
  for (var i = 9; i <= 17; i++) {
    displayText(i);
  }
});






function saveText(hour) {
  var text = $("#plan-col-" + hour).html();
  localStorage.setItem("colorTime" + hour, text);
}

function displayText(hour) {
  var text = localStorage.getItem("colorTime" + hour);
  $("#plan-col-" + hour).html(text);
}


// This function adds a click event listener to the save button with the id "save-col-{hour}"
function addSaveListener(hour) {
  $("#save-col-" + hour).click(function() {
    saveText(hour);
  });
}


$(document).ready(function() {
  for (var i = 9; i <= 17; i++) {
    displayText(i);
  }
});


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