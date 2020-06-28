// let person = ['Nam',19,'Ha Noi',25,false];
// console.log(person);

// let person = {};
// console.log(person);

// let person = {
//     name: 'Nam'
// };
// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 19
// };
// console.log(person);

// console.log('Declare a variable named movie with an object value, containing the following properties:');
// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }
// console.log(movie);

// let person = {
//     name:'Nam',
//     age: 18,
// };
// console.log(person);
// console.log(person.age);

// console.log(person['name']);

// console.log('Log all of 3 the properties of the movie object to the console using 2 different ways');
// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);

// console.log(movie.smt); //it's print undefined.

// let x = prompt('Enter Number: ');
// if (x == null || x == undefined) {

//     alert(x+ " is null or undefined");

// } else {

//     alert(x+ " has real value");

// }



// console.log('Check value');

// let input = prompt('What do you want to know ?');
// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }
// console.log(movie);

// if(input == null)
// {
//     alert('There are no '+input+" property that match in object!");
// }
// else{
//     alert(movie[input]);
// }

// let person = {
//     name:'Nam',
//     age: 18,
// };
// console.log(person.name);
// person.name = "Nguyen Phuong Nam";
// console.log(person.name);

// console.log(person['age']);
// person['age']=19;
// console.log(person['age']);

// console.log('Change the rate of the movie to 8.7');
// console.log('Increase the rate of the movie by 0.5');

// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }

// movie.rate = 8.7;
// console.log(movie);
// movie.rate = movie.rate + 0.5;
// console.log(movie);

// console.log('Update by props');
// let input = prompt('Enter props to update: ');
// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }
// if(input in movie)
// {
//     let updateContent = prompt('Enter update content: ');
//     movie[input]= updateContent;
//     alert(input+ " has been updated!")
// }
// else{
//     alert('There are no '+ input + ' props that match in the object!')
// }
// console.log(movie);

// let person = {
//     name:'Nam',
//     age: 18,
// };
// console.log(person);
// person.location = "Hanoi";
// console.log(person);

// console.log('Exercise Create: ');
// let input = prompt('Enter props to update: ');
// let movie = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4
// }
// if(input in movie)
// {
//     let updateContent = prompt('Enter update content: ');
//     movie[input]= updateContent;
//     alert(input+ " has been updated!")
// }
// else{
//     alert(input + ' props cannot found in object and will be create in the object!');
//     let newContent= prompt('Enter content for '+ input+' property: ');
//     movie[input]=newContent;
//     alert(input + ' has been added with content!');
// }
// console.log(movie);

// let person = {
//     name:'Nam',
//     age: 18,
// };
// console.log(person);
// delete person.age;
// console.log(person);


// let person1 = {
//     name:'Nam',
//     age: 18,
// };

// let person2 = {
//     name:'Duc',
//     age: 19,
// };
// let personArr = [];
// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);
// console.log(personArr[0].name);

// for(let i = 0; i<personArr.length; i++)
// {
//     let p = personArr[i];
//     console.log(p);
//     console.log(p.age);
// }

// let movie1 = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4,
// }

// let movie2 = {
//     title: 'Fast and Furious',
//     year: 2015,
//     rate: 8.0,
// }
// let movie3 = {
//     title: 'Home Before Dark',
//     year: 2019,
//     rate: 8.9,
// }

// let movies = [];
// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);
// // console.log(movies);
// // console.log(movies[0]);
// // console.log(movies[2].title);
// console.log('------------------');
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
//     console.log(movies[i].year);
//     console.log(movies[i].rate);
//     console.log('------------------');
// }

// console.log(movies[2]);
// movies[2].rate = movies[2].rate + 0.7;
// console.log(movies[2]);

// let person = {
//     name: 'Nam',
//     age: 18,
//     favs: ['Netflix', 'Cafe', 'Code'],
// };

// console.log(person.favs[1]);
// let favs = person.favs;

// for(let i = 0; i<favs.length; i++)

// {
//     console.log(favs[i]);
// }

// favs.push('Macbook');
// console.log(favs);

// console.log('Exercise Obj contain Arr');
// let movie1 = {
//     title: 'The dark night rise',
//     year: 2012,
//     rate: 8.4,
//     characters: ['Action','Racing','Drama'],
// }
// console.log(movie1.title);
// console.log(movie1.year);
// console.log(movie1.rate);
// console.log(...movie1.characters);

// let casts = movie1.characters;

// casts.push('Hollywood');

// console.log(movie1.characters);

// let movie1 = {
//     title: 'The dark knight rise',
//     year: 2012,
//     rate: 8.4,
//     casts: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
// }

// let movie2 = {
//     title: 'Fast and Furious',
//     year: 2015,
//     rate: 8.0,
//     casts: ['Vin Diesel', 'Paul Walker', 'Michelle Rodriguez'],
// }
// let movie3 = {
//     title: 'Home Before Dark',
//     year: 2019,
//     rate: 8.9,
//     casts: ['Brooklyn Prince', 'Jim Sturgess', 'Kylie Rogers'],
// }

// let movies = [];
// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);
// console.log(movies);

// console.log('----------------');

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
//     console.log(movies[i].year);
//     console.log(movies[i].rate);
//     console.log(...movies[i].casts);
//     console.log('----------------');
// }

// console.log('Exercises Optional: ');

// let data = {
//     total_results: 3,
//     results: [{
//             popularity: 512.119,
//             vote_count: 460,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//             id: 475557,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
//             original_language: "en",
//             original_title: "Joker",
//             genres: [
//                 80,
//                 18,
//                 53
//             ],
//             title: "Joker",
//             vote_average: 8.8,
//             overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//             release_date: "2019-10-04"
//         },
//         {
//             popularity: 241.402,
//             vote_count: 598,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
//             id: 429203,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
//             original_language: "en",
//             original_title: "The Old Man & the Gun",
//             genres: [
//                 35,
//                 80,
//                 18
//             ],
//             title: "The Old Man & the Gun",
//             vote_average: 6.3,
//             overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
//             release_date: "2018-09-28"
//         },
//         {
//             popularity: 233.735,
//             vote_count: 4139,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
//             id: 429617,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
//             original_language: "en",
//             original_title: "Spider-Man: Far from Home",
//             genres: [
//                 28,
//                 12,
//                 878
//             ],
//             title: "Spider-Man: Far from Home",
//             vote_average: 7.6,
//             overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
//             release_date: "2019-07-02"
//         },
//         {
//             popularity: 158.333,
//             vote_count: 323,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
//             id: 522938,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
//             original_language: "en",
//             original_title: "Rambo: Last Blood",
//             genres: [
//                 28,
//                 53
//             ],
//             title: "Rambo: Last Blood",
//             vote_average: 6.1,
//             overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
//             release_date: "2019-09-20"
//         },
//     ]
// }
// console.log('Optional 1+2 ');
// console.log(data.results.length);
// console.log(data.results[0]);
// console.log(data.results[0].title);
// console.log(data.results[0].vote_average);
// console.log(...data.results[0].genres);
// console.log('-------------------------------');
// for (let i = 0; i < data.results.length; i++) {
//     console.log(data.results[i].title);
//     console.log(data.results[i].vote_average);
//     console.log(...data.results[i].genres);
//     console.log('-------------------------------');
// }

// console.log('Optional 3: ');
// let genre = prompt('Enter genres of movies to search: ');
// let genreScript = Number(genre);

// for(let i = 0; i<data.results.length; i++)
// {
//     if(data.results[i].genres.includes(genreScript))
//     {
//         console.log(data.results[i].title);
//     }
//     else 
//     {
//         alert('Cannot find any genre that match in objects');
//         break;
//     }
// }

// console.log('Optional 4: ');
//  let minRate = Number(prompt('Enter minimum rate to search: '));
 
//  for (let i=0; i<data.results.length; i++)
//  {
//      if(data.results[i].vote_average >= minRate)

//      {
//          console.log(data.results[i].title);
//          console.log(data.results[i].vote_average);
//      }
//      else
//      {
//         alert('Cannot find any movies that match requirement in objects');
//         break;
//      }
//  }

