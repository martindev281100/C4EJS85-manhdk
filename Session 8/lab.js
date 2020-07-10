// //Bai 1
// let count = 0;
// const number = document.getElementById("count");
// const btn_increase = document.getElementById("btn_add");
// const btn_decrease = document.getElementById('btn_minus');

// btn_increase.addEventListener('click', function () {
//     count++;
//     number.innerHTML = count;
// })

// btn_decrease.addEventListener('click', function () {
//     count--;
//     number.innerHTML = count;
// })

// //Bai 2

// const btn_start = document.getElementById('btn_start');
// const btn_stop = document.getElementById('btn_stop');
// let current_timer = document.getElementById('time_remaining');
// btn_start.addEventListener('click', function () {
//     //  let current_timer = current.innerHTML;
//     const timer = document.getElementById('timer').value;
//     current_timer.innerHTML = timer;
//     let timer_count = setInterval(() => {
//         current_timer.innerHTML = current_timer.innerHTML - 1;
//         console.log(current_timer.innerHTML)
//         if (current_timer.innerHTML == 0) {
//             clearInterval(timer_count);
//         }
//     }, 1000);  
//     btn_stop.addEventListener('click',function(){
//         clearInterval(timer_count);
//         current_timer.innerHTML = 'Stopped'
//     })
// })

