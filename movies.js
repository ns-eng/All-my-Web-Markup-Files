// Define the Movie class
class Movie {
  // title, cast, description, rating
  #Title;
  constructor(){
    this.#Title = "Barbie (2023)";
  }
  #cast(){
    this.#cast = ["Margo Robbie","Ryan Gosling","Issa Rae","America Ferrera","Will Ferrell"];
  }
  #description(){
    this.#description = "When an idenity crisis clouds her sunny life, Barbie visits the real world \nand discovers the challenges of just being a woman- or just being a Ken.";
  }
  #rating(){
    this.#rating = 9.5;
  }
  // Method to update the rating of the movie
  updateRating(newRating){
    this.#rating() = newRating;
  }
  // Method to display the movie's information
  displayInfo(){
    document.getElementById("movie-info").innerHTML = Movie;
    console.log(Movie);

  }
  
}
// Test your implementation
let myMovie = new Movie();

// Display the initial information of the movie
myMovie.displayInfo();

// Update the rating of the movie
function updateMovieRating(title, newRating){
  myMovie.updateRating(10);

// Display the updated information of the movie
  document.write("Updated Rating:").innerHTML
  document.getElementById("movie-info").innerHTML += myMovie;
}

// Nothing I try works. I couldn't get my code to work and ran out of time