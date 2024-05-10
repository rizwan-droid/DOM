var h3 = document.querySelector('h3');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var id;

start.addEventListener('click', function(){
    let count = 0;
    
    id = setInterval(() => {
        count++;
        // console.log(count);
        h3.textContent = count;
    }, 1000);
})

stop.addEventListener('click', function(){
    clearInterval(id);
})

reset.addEventListener('click', function(){
    h3.textContent = 0;
})