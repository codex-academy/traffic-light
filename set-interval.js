var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval(){
        counter++;
        // write some code here

        showNumber(counter);
}

setInterval(interval, 500);
