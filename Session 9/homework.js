// //Bai 1:
// let promise = new Promise(async function (resolve, reject) {
//     await setTimeout(() => reject(new Error("Whoops!")), 1000);
// })
// promise.then(
//     result => alert(result), // shows "done!" after 1 second
//     error => alert(error) // doesn't run
// );

// //Bai 2:
//     const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
//     fetchPromise.then(connection => {
//         console.log('Connected');
//         console.log(connection);
//         const jsonPromise = connection.json();
//         return jsonPromise;
//     }).then(smt=>{
//         console.log(smt);
//     });

// // Bai 4: 

// function randomNumbers(){
//     let randomNumbers = Math.floor(Math.random() * 10) ;
// }
// randomNumbers();
// const x = randomNumbers();
// if (x < 0) {
//   console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
//   console.log('Failed: the number is bigger than 10');
// } else {
//   console.log('Passed, bravo');
// }

// //Bai 5:

// function randomNumbers(x, y){
//     let randomNumbers = Math.floor(Math.random() * (y-x)+x) ;
//     return randomNumbers;
// }
// const x = randomNumbers(4, 16);
// if (x < 4) {
//   console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
//   console.log('Failed: the number is bigger than 16');
// } else {
//   console.log('Passed, bravo');
// }

// //Bai 6:
// function calculate(x1, y1,x2,y2)
// {
//     let result = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
//     return result;
// }
// const x = calculate(3, 10, 0, 6);
// if (x !== 5) {
//   console.log('Failed: the calculation is wrong');
// } else {
//   console.log('Passed, bravo');
// }

// //Bai 7:
// let data = {
//     "success": {
//         "total": 1
//     },
//     "contents": {
//         "quotes": [
//             {
//                 "quote": "Remove the temptation to settle for anything short of what you deserve.",
//                 "length": "71",
//                 "author": "Lorii Myers",
//                 "tags": [
//                     "expectation",
//                     "inspire",
//                     "perfection"
//                 ],
//                 "category": "inspire",
//                 "language": "en",
//                 "date": "2020-07-14",
//                 "permalink": "https://theysaidso.com/quote/lorii-myers-remove-the-temptation-to-settle-for-anything-short-of-what-you-deser",
//                 "id": "ZWrV624xU_q6_KYYlrQpYgeF",
//                 "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
//                 "title": "Inspiring Quote of the day"
//             }
//         ]
//     },
//     "baseurl": "https://theysaidso.com",
//     "copyright": {
//         "year": 2022,
//         "url": "https://theysaidso.com"
//     }
// }
// let quote_content = document.getElementById('quote_content');
// let quote_author = document.getElementById('quote_author');
// // async function getData(){
// //     const response = await fetch('http://quotes.rest/qod.json');
// //     // console.log(await response.json());
// //     const result = await response.json();
// //     console.log(result);
// // } 
// // getData();
// const {quote,author}= data.contents.quotes[0];

// quote_content.innerHTML = quote;
// quote_author.innerHTML = author;

//Bai 8:
const first_name = document.getElementById('first_name');
const btn_add = document.getElementById('btn_add');
btn_add.addEventListener('click', function(){
    console.log('')
})
async function getData(){
    const response = await fetch('https://sheetdb.io/api/v1/nr2swm7wen9j6');
    const result = await response.json();
    console.log(result);
}
getData();
