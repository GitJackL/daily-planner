
window.setInterval(function () {
  $('#currentDay').html(moment().format('ddd DD/MM/YYYY H:mm:ss'))
}, 1000);

var timeNow = moment().hours();


if (timeNow === 9) {
$("#colorTimeNine").css({"backgroundColor": "green"});
};

if (timeNow === 10) {
  $("#colorTimeTen").css({"backgroundColor": "green"});
  $("#colorTimeNine").css({"backgroundColor": "red"});
  };
  
if (timeNow === 11) {
    $("#colorTimeEleven").css({"backgroundColor": "green"});
    $("#colorTimeNine").css({"backgroundColor": "red"});
    $("#colorTimeTen").css({"backgroundColor": "red"});
    };
    
if (timeNow === 12) {
    $("#colorTimeTwelve").css({"backgroundColor": "green"});
    $("#colorTimeEleven").css({"backgroundColor": "red"});
    $("#colorTimeTen").css({"backgroundColor": "red"});
    $("#colorTimeNine").css({"backgroundColor": "red"});
    };
      
if (timeNow === 13) {
    $("#colorTimeOne").css({"backgroundColor": "green"});
    $("#colorTimeTwelve").css({"backgroundColor": "red"});
    $("#colorTimeEleven").css({"backgroundColor": "red"});
    $("#colorTimeTen").css({"backgroundColor": "red"});
    $("#colorTimeNine").css({"backgroundColor": "red"});
    };

if (timeNow === 14) {
  $("#colorTimeTwo").css({"backgroundColor": "green"});
  $("#colorTimeNine").css({"backgroundColor": "red"});
  $("#colorTimeTen").css({"backgroundColor": "red"});
  $("#colorTimeEleven").css({"backgroundColor": "red"});
  $("#colorTimeTwelve").css({"backgroundColor": "red"});
  $("#colorTimeOne").css({"backgroundColor": "red"});
  };

if (timeNow === 15) {
  $("#colorTimeThree").css({"backgroundColor": "green"});
  $("#colorTimeTwo").css({"backgroundColor": "red"});
  $("#colorTimeOne").css({"backgroundColor": "red"});
  $("#colorTimeTwelve").css({"backgroundColor": "red"});
  $("#colorTimeEleven").css({"backgroundColor": "red"});
  $("#colorTimeTen").css({"backgroundColor": "red"});
  $("#colorTimeNine").css({"backgroundColor": "red"});
  };
  
if (timeNow === 16) {
  $("#colorTimeFour").css({"backgroundColor": "green"});
  $("#colorTimeThree").css({"backgroundColor": "red"});
  $("#colorTimeTwo").css({"backgroundColor": "red"});
  $("#colorTimeOne").css({"backgroundColor": "red"});
  $("#colorTimeTwelve").css({"backgroundColor": "red"});
  $("#colorTimeEleven").css({"backgroundColor": "red"});
  $("#colorTimeTen").css({"backgroundColor": "red"});
  $("#colorTimeNine").css({"backgroundColor": "red"});
  };

if (timeNow === 17) {
    $("#colorTimeFive").css({"backgroundColor": "green"});
    $("#colorTimeFour").css({"backgroundColor": "red"});
    $("#colorTimeThree").css({"backgroundColor": "red"});
    $("#colorTimeTwo").css({"backgroundColor": "red"});
    $("#colorTimeOne").css({"backgroundColor": "red"});
    $("#colorTimeTwelve").css({"backgroundColor": "red"});
    $("#colorTimeEleven").css({"backgroundColor": "red"});
    $("#colorTimeTen").css({"backgroundColor": "red"});
    $("#colorTimeNine").css({"backgroundColor": "red"});
    };
    

var planCol = document.getElementById("plan-col-nine");
var saveCol = document.getElementById("save-col-nine");
var planSaved = document.getElementById("plan-col-nine");

saveCol.onclick = function() {
  console.log(planCol);
}