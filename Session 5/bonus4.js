// const s = "Hello world something here";

// const countData = {
// };
// for (let i = 0; i < s.length; i++) {
//     const c = s[i].toLowerCase();
//     if (countData[c]) {
//         countData[c]++;
//     } else {
//         countData[c] = 1;
//     }
// }

// console.log(countData);


const movies = [{
        title: 'The dark knight',
        rate: 8.5,
        genre: 'Action',
    },
    {
        title: 'Home before dark',
        rate: 8.9,
        genre: 'Drama',
    },
    {
        title: 'Defense Jacob',
        rate: 8.7,
        genre: 'Drama',
    },
    {
        title: 'Fast and Furious',
        rate: 8.0,
        genre: 'Action',
    }
]

const movieByGroup = {
    "Action": [],
    "Drama": [],
}
for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    console.log(movie);
    const genre = movie.genre;
    console.log(genre);

    movieByGroup[genre].push(movie);
}
console.log(movieByGroup);