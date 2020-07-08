// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
// }

// function interval(){
//     setInterval(() => {
//         console.log('HeeHaw');
//     }, 2000);
// }

// // interval();
// //Bai 4
// var firstLi = document.getElementsByTagName("li")[0].innerHTML;
// console.log(firstLi);
// for(let i = 0; i<document.getElementsByTagName("li").length; i++){
//     console.log(document.getElementsByTagName("li")[i].innerHTML);
// }

// //Bai 5

// var divClass =document.getElementsByTagName("div");
// console.log(divClass);

// console.log(document.getElementsByClassName("singer")[1].innerHTML);

// for(let i = 0; i<document.getElementsByClassName("singer").length; i++){
//     console.log(document.getElementsByClassName("singer")[i].innerHTML);
// }
// document.getElementsByClassName("singer")[1].remove();
// //Bai 6 

// //Bai 7.1
// let btn1 = document.getElementById("button1");
// btn1.addEventListener('click',()=>{
//     console.log(event.target);
// })
// let btn2 = document.getElementById("button2");
// btn2.addEventListener('click',()=>{
//     console.log(event.target);
// })

// //Bai 7.2
// let input1 = document.getElementById("input1");

// input1.addEventListener('keydown',()=>{
//     console.log(event.key);
// })

// //Bai 8

// function bai8(){
//     alert('Dao Khac Manh');
//     alert('Saving amount of money');
// }
// bai8();

// //Bai 9: 

// function bai9(name="Dao Khac Manh", wish="Saving money")
// {
//     alert(name+" "+ wish);
// }

// //Bai 10:
// function bai10(name, wish="Saving money")
// {
//     name = name || 'name';
//     alert(name+" "+ wish);
// }
// bai10();

// //bai11:

// let btn1 = document.getElementById("upper_btn");


// console.log(btn1);
// btn1.addEventListener('click', () => {
//     console.log("UpperIt!!! just clicked");
//     console.log(document.getElementById("input2").value);
//     console.log("Uppercase name: " + document.getElementById("input2").value.toUpperCase())
//     result.innerHTML = document.getElementById("input2").value.toUpperCase();
// })

// let input2 = document.getElementById("input2");
// console.log(input2);
// let result = document.getElementById("div1");
// console.log(result);

//bai 12: 

let items = ['Backpack', 'MiBand watch', 'Ring'];

console.log(items);
let container = document.getElementById('itemList');
console.log(container);
for (let i = 0; i < items.length; i++) {
    container.insertAdjacentHTML('beforeend', `<li id="${i}">${items[i]}<button class="btnRemove">remove</button></li>`);
}
document.getElementById("ul-li1").remove();
document.getElementById("ul-li2").remove();

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click', () => {
    let newItem = document.getElementById("inputItem").value;
    console.log(newItem);
    items.push(newItem);
    console.log(items);
    let lastItem = items[items.length - 1];
    let lastIndex = items.length - 1;
    container.insertAdjacentHTML('beforeend', `<li id="${lastIndex}">${lastItem}<button class="btnRemove">remove</button></li>`);
    document.getElementById('inputItem').value = '';
    console.log(btnRemove);

})

let btnRemove = document.getElementsByClassName('btnRemove');
for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', () => {
        console.log('remove' + ' index: ' + i);
        items.splice(i,1);
        let removeElement = document.getElementById(i);
        removeElement.remove();
        console.log(removeElement);
        console.log(items);
    })
}