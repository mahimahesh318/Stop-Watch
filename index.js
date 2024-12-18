// const timer = document.getElementById('timer');
// var time = null;
// var startTime = 0;
// var elapsedTime = 0;
// var isRunning = false;

// function start(){
// if(!isRunning){
//   startTime = Date.now() - elapsedTime;
//   time = setInterval(update,10);
//   isRunning = true;
// }
// }





// function update(){
//   const curretTime = Date.now();
//   elapsedTime = curretTime - startTime;
//   var hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // to convert milliseconds to hours
//   var minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//   var seconds = Math.floor(elapsedTime / 1000 % 60);
//   var milliseconds = Math.floor(elapsedTime % 1000 / 10);

//   timer.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

const timer = document.getElementById('timer');
var time = null;
var startTime = 0;
var elapsedTime = 0;
var isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    clearInterval(time);
    isRunning = false;
}

function reset(){
    clearInterval(time);
    isRunning = false;
    elapsedTime = 0;
    timer.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    var seconds = Math.floor((elapsedTime / 1000) % 60);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Formatting to always display two digits
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

