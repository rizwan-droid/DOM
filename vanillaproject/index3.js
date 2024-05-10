var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var submit = document.querySelector('#submit');
var h3 = document.querySelector('h3');

submit.addEventListener('click', function(event){
    event.preventDefault();
    if(input1.value==='' || input2.value===''){
        h3.textContent = 'some error';
        h3.style.color = 'red';
    }else{
        h3.textContent = '';
    }

})