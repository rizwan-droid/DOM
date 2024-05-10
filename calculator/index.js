let btns = document.querySelectorAll('button');
let input = document.querySelector('#display');
// console.log(btns);
for(const btn of btns){
    btn.addEventListener('click', function(event){
        // console.log('i am clicked');
        let ans = event.target.textContent;
        input.textContent = ans;

        if(ans == '='){
            let finalans = eval(ans);
        }
    })
}
