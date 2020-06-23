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