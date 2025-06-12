let movies =[
    "The Matrix",
  "Inception",
  "Black Panther",
  "Interstellar",
  "John Wick"
]

//iterate through loop
for(const movie of movies){
    console.log(movie);
}
console.log()
//rankk movies and push to new array
console.log("rank movies and push to new array");
let rankedMovies=[]
let rank = 1
for(const movie of movies){
    rankedMovies.push(`${rank} ${movie}`)
    rank++;
}
console.log(rankedMovies);
console.log()
console.log("FILTER MOVIES THAT START WITH")

for(const filteredMovies of movies){
    if( filteredMovies.startsWith("B"))
    {
        console.log(filteredMovies)
        break;
    }
    else{
        console.log("oops nothing to see here")
    }
}
console.log()
let movieCollection = [
  { title: "Inception", director: "Christopher Nolan", year: 2010 },
  { title: "Get Out", director: "Jordan Peele", year: 2017 },
  { title: "The Matrix", director: "Wachowskis", year: 1999 },
  { title: "Black Panther", director: "Ryan Coogler", year: 2018 }
];

//.map()Transforms each item & returns a new array
let titles = movieCollection.map(movie => movie.title)
console.log(titles);

let fave = movieCollection.find(movie => movie.title === "Black Panther");
console.log(fave.title)