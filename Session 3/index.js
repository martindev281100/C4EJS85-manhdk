// let item1 = "Com gao lut";
// let item2 = "Chao ga";
// let item3 = "burger";
// let item4 = "Khoai tay chien"; 

// let menu = [];
// console.log(menu);

// let menu = ['Chao Ga'];
// console.log(menu);

// let menu = ['Chao ga','Com gao lut', 'Burger'];
// console.log(menu);

// console.log('Exercise of Init: Initialize an array named movies containing the titles of some of your favorite movies');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);

// let menu = ['Chao ga','Com gao lut', 'Burger'];
// console.log(menu);

// menu.push('Khoai Tay chien')
// console.log(menu);

// let menu = ['Chao ga','Com gao lut', 'Burger'];
// let newItem=prompt('Enter new item:');
// menu.push(newItem);
// console.log(menu);

// console.log('Exercise of Create: Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let newMovie = prompt('Enter new movie:');
// movies.push(newMovie);
// console.log(movies);

// let menu = ['Chao ga', 'Com gao lut', 'Burger'];
// console.log(menu);
// let i = 1;

// console.log(menu[i]);

// console.log('Exercise of Read: Read the item at position i in the movies array, i entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let i = prompt('Enter position of item in array:');
// console.log(movies[i]);

// let menu = ['Chao ga', 'Com gao lut', 'Burger'];
// console.log(menu);
// let i  =1;
// menu[i] = 'Mien ngu sac';
// console.log(menu);

// console.log('Exercise of Update: ');
// console.log('1. Update the first item of the movies array into movieTitle, movieTitle entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let i = prompt('Enter first movie name: ');
// movies[0]= i;
// console.log(movies);
// console.log('2. Update an item at position i of the movies into movieTitle, i and movieTitle entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let movieTitle = prompt('Enter new movie title: ');
// let i = prompt('Enter position to update new movie: ');
// movies[i] = movieTitle;
// console.log(movies);

// let menu = ['Chao ga', 'Com gao lut', 'Burger'];
// console.log(menu);
// menu.splice(0, 1);
// console.log(menu);

// console.log('Exercise of delete: ');
// console.log('1. Delete 1 item at position i from movies array movies, i entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let i = prompt('Enter position to delete movie title: ');
// movies.splice(i, 1);
// console.log(movies);

// console.log('2. Delete n item at position i from movies array, i and n entered by users');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// console.log(movies);
// let i = prompt('Enter position to delete movie title: ');
// let n = prompt('Enter numbers of item to delete in array: ');
// movies.splice(i, n);
// console.log(movies);

// let menu = ['Chao ga', 'Com gao lut', 'Burger', 'Khoai Tay', 'jhbji'];
// console.log(n);
// for(let i = 0; i<menu.length; i++)
// {
//     console.log(menu[i]);
// }
// console.log(menu);
//console.log('Exercise read all: ');
//console.log('1. Read or log all of items in movies array into console');
// let movies = ['Avengers','Friends','Brooklyn 99'];
// for (let i = 0; i<movies.length; i++)
// {
//     console.log(movies[i]);
// }
//console.log('2. Read or log only first half items in movies array into console');
// let movies = ['Avengers','Friends','Brooklyn 99','something'];
// for (let i=0; i<(movies.length/2); i++)
// {
//     console.log(movies[i]);
// }
//console.log('3. Read or log all of items in movies array into console with the item position');
// let movies = ['Avengers','Friends','Brooklyn 99','something'];
// for (let i=0; i<(movies.length); i++)
// {
//     console.log((i+1)+". "+movies[i]);
// }
// let menu = ['Chao ga', 'Com gao lut', 'Burger', 'Khoai Tay', 'jhbji'];
// console.log(menu);
// for(let i = 0; i <menu.length;i++)
// {
//     menu[i]=menu[i].toUpperCase();
// }
// console.log(menu);
// console.log('4. Change all items of movies array into lowercase');
// let movies = ['Avengers','Friends','Brooklyn 99','something'];
// for (let i=0; i<(movies.length); i++)
// {
//     movies[i]=movies[i].toLowerCase();
//     console.log(movies[i]);
// }
// let number = Number(prompt('Enter a number: '));
// console.log(n);

// if(n)
// {
//     console.log('Is number');
// }
// else{
//     console.log('Not a number');
// }

// while(true)
// {
//     let number = Number(prompt('Enter a number: '));
//     if(number)
//     {
//         //n is valid
//         break;
//     }

// }

// console.log('Exercise of while: Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.')
// let username;
// while(true)
// {
//     username = prompt('Register an username: ');
//     if(username.length<=15)
//     {
//         alert('Good username');
//         console.log(username);
//         break;
//     }
//     alert('Please enter username under 15 characters!');
// }

// console.log('Exercise of *spider');

// let choice;
// let selection = [1, 2, 3, 4];
// while(true)
// {
//     choice = Number(prompt('How many legs does a spider have? \n 1. None \n 2. 4 legs \n 3. 8 legs \n 4. 12 legs')); 
//     if(selection.includes(choice)== true)
//     {
//         console.log('You chose: '+choice);
//         if(choice == 3)
//         {
//             alert('Correct answer!');
//         }
//         else
//         {
//             alert('Goodluck next time!');
//         }
//         break;
//     }
//     else{
//         console.log('Hahaha');
//     }
// }

//console.log('HOMEWORK'):
// console.log('Bài 1: Variable swap');
// console.log('Cách 1: Sử dụng biến temporary');
// let a = 5;
// let b = 6;
// let temp = a;
// console.log(a,b);
// a = b;
// b = temp;
// console.log(a,b);
// console.log('Cách 2: Chỉ sử dụng 2 biến có sẵn');
// let a = 5;
// let b = 6;
// console.log(a,b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// console.log('Bài 2: Split string into array');
// const s = "Hello beauty there";
// let a = s.split(" ");
// console.log(a);

// console.log('Bài 3: Using spread operator')
// const a = [4, 5, 7, -8];
// console.log(...a);

// console.log('Bài 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users');
// let choice;
// let selection;
// var items= ['Jeans', 'T-shirt', 'Socks'];
// while(true)
// {
//     choice = prompt('Hi there, welcome to the store, what do you want? (C, R, U, D-Capital letter only)?')
//     selection  = ['C','R', 'U', 'D'];
//     if(selection.includes(choice)== true)
//     {
//         if(choice == 'R')
//         {
//             for(let i = 0; i < items.length; i++)
//             {
//                 console.log((i+1)+'. '+items[i] );
//             }
//             break;
//         }
//         else if(choice == 'C')
//         {
//             let newItems= prompt('Enter new item: ');
//             updatedItems= items.push(newItems);
//             updatedItems = items;
//             alert('Done');
//         }
//         else if(choice =='U')
//         {
//             let updateItemPlace = prompt('Enter the position you want to update: ');

//                 let updateItem= prompt('Enter name of items to update: ');
            
//                 items[updateItemPlace]=updateItem;
//                 alert('Done');
            
//         }
//         else if (choice == 'D')
//         {
//             let deleteItemPlace = prompt('Enter the position you want to delete: ');
//             items.splice(deleteItemPlace,1);
//             alert('Done');
//         }
    
//     }
//     else{
//         alert('This command is not supported!');
//     }
// }

// console.log('Bài 5:	Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users');

// let string = prompt('Enter numbers(separated by commas):');
// let number=(string.split(","));
// let sum =0;
// for(let i=0;i<number.length;i++)
// {
//     sum = sum+ Number(number[i]);
// }
// alert('The sum of them is '+ sum);

// console.log('Bài 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users');

// let string = prompt('Enter numbers(separated by commas):');
// let number=string.split(",");
// let numberArr=[];
// for(let i = 0; i<number.length; i++)
// {
//     numberArr.push(Number(number[i]));
//     console.log(numberArr);
// }
// console.log(Math.min(...numberArr));

// console.log('Bài 7:')
// let number = Number(prompt('Enter number to search in array: '));
// const arr = [3, 4, 6, -9, 10, -88, 2];
// while(true)
// {
//     for(let i = 0; i<arr.length; i++)
//     {
//         if(number == [arr[i]])
//         {
//             alert(number+ " is Found in array at index "+ i);
//         }
//         break;
//     }
//     alert(number + " cannot found in array");
//     break;
// }

// console.log('Bài 8:');
// console.log('8.1: log size of sheep to screen');
// const flock = [5, 7, 300, 90, 24, 50, 75];
// console.log('My sheep size: \n'+ flock);

// console.log('8.2: Find max ');
// let max = Math.max(...flock);
// console.log('My biggest sheep: '+ max);

// console.log('8.3: Set default size');
// let index = flock.indexOf(max);
// flock[index] = 8;
// console.log('My sheep size: \n'+ flock);

// console.log('8.4: flock growing by 50');
// console.log('Month 1: ')
// for(let i = 0; i<flock.length; i++)
// {
//     flock[i]=flock[i]+50;
// }
// console.log('After 1 month....');
// console.log('My sheep size: \n'+ flock);
// max = Math.max(...flock);
// index = flock.indexOf(max);
// flock[index] = 8;
// console.log('My sheep size after shave: \n'+ flock);

// console.log('8.5: flock growing in 3 months');
// console.log('Month 2: ')
// for(let i = 0; i<flock.length; i++)
// {
//     flock[i]=flock[i]+50;
// }
// console.log('After 2 month....');
// console.log('My sheep size: \n'+ flock);
// max = Math.max(...flock);
// index = flock.indexOf(max);
// flock[index] = 8;
// console.log('My sheep size after shave: \n'+ flock);

// console.log('Month 3: ')
// for(let i = 0; i<flock.length; i++)
// {
//     flock[i]=flock[i]+50;
// }
// console.log('After 3 month....');
// console.log('My sheep size: \n'+ flock);


// console.log('8.6: Calculate total size of flock and sell');
// let sum = 0;

// for (let i = 0; i<flock.length; i++)
// {
//     sum = sum+flock[i];
// }
// console.log('Total size of flock: '+ sum);
// console.log('I would receive: '+ sum*2+"$")

// console.log('Bài 10: ')
// let names = prompt('Enter names: ');
// nameArr = names.split(',');
// let newArr=[];
// for(let i = 0; i<nameArr.length; i++)
// {
//     newArr.push("<"+nameArr[i]+">");
// }
// alert(nameArr+ " => "+newArr);

// console.log('Bài 11:');
// let number = prompt('Enter sequence of numeber: ');
// let numberArr = number.split(',');
// let oddArr = [];
// for(let i = 0; i<numberArr.length; i++)
// {
//     if(numberArr[i]%2!=0)
//     {
//         oddArr.push(numberArr[i]);
//     }
// }
// console.log(numberArr+ " => "+oddArr);
// console.log('Turtle Exercise');
// clear();
// function square() {
// var colors = ["red", "gray", "blue", "purple", "cyan"];
//   for(var x=1; x<=4; x++)
//   {
//     for (var i=1; i <= 4; i++) {
//       color(colors[x]);
//     fd(50*x)
//     rt(90)
//   }
//   }
  
// }
// square()