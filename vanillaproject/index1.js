var counter = document.getElementById('counter');
var textarea = document.querySelector('textarea');
var h3 = document.querySelector('h3');
var reset = document.querySelector('button')

textarea.addEventListener('input', function(){
counter.textContent = textarea.value.length;
h3.append(counter);

})

reset.addEventListener('click', function(){
    h3.innerText = 0;
    textarea.value = '';
})