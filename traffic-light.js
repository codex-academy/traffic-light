
function allLightsOff(){
  document.querySelectorAll('.light').forEach(function(light){
    light.classList.remove('on');
  });
}

function switchOn(className){
  allLightsOff();
  var redLight = document.querySelector(className);
  redLight.classList.add('on');
}

function go(){
  switchOn('.go');
}

function stop(){
  switchOn('.stop');
}

function caution(){
  switchOn('.caution');
}

function captureTimeChange(cb){
  var timeLeft = document.querySelector("#timeLeft");
  var number = document.querySelector("#number");

  console.log(timeLeft);

  timeLeft.addEventListener("keyup", function(evt){
      var num = Number(evt.target.value);
      number.innerHTML = num;
    setTimeout(function(){
      cb(num);
    }, 0)
  });
}



/*
var counter = 60;
setInterval(function(){
  counter--;
  if (counter > 40){
    stop();
  }
  else if (counter < 40 && counter > 20){
    go();
  }
  else{
    carefull();
  }
  if (counter === 0){
    counter = 60;
  }
}, 500);
*/
