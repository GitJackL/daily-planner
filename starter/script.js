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