var input = document.querySelector('input');
var addbtn = document.querySelector('button');
var removebtn = document.getElementById('remove');
var list = document.querySelector('ul');
var li;

addbtn.addEventListener('click', function(){
    li = document.createElement('li');
    if(input.value===''){

    }
    else{
        li.textContent = input.value;
        list.append(li);
        input.value='';
    }
})

removebtn.addEventListener('click', function(){
    list.removeChild(li);
})