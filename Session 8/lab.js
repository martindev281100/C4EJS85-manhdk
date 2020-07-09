//Bai 1
let count = 0;
const number = document.getElementById("count");
const btn_increase = document.getElementById("btn_add");
const btn_decrease = document.getElementById('btn_minus');

btn_increase.addEventListener('click',function(){
    count ++;
    number.innerHTML=count;
})

btn_decrease.addEventListener('click',function(){
    count --;
    number.innerHTML=count;
})

//Bai 2

const btn_start = document.getElementById('btn_start');
const btn_stop = document.getElementById('btn_stop');
let current = document.getElementById('time_remaining');
let current_timer = current.innerHTML;
btn_start.addEventListener('click',function(){
    const timer = document.getElementById('timer').value;
    current_timer = timer;
    setInterval(() => {
        current_timer = current_timer-1;
        console.log(current_timer)
    }, 1000);

})