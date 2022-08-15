window.addEventListener("load", function() {
  const form = document.getElementById("favThings");
  form.addEventListener("submit", favArray);
});

function favArray(e) {
  e.preventDefault();
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput= document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;


const originalArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput]
console.log(originalArray)

const secondItem = originalArray[1];
const firstItem = originalArray[0];
const thirdItem = originalArray[2];

const newArray = [];
newArray.push(secondItem, firstItem);
newArray.push(originalArray[2]);
console.log(newArray)
}



//take the form inputs
// put them into an array

//for our own use we're gonna
//write code that identifies what element is in specific spots in the array
// write code that adds the found elements to a new array (using array.prototype.push())
//display they new array in our page's html as an unordered list like we did last practice (the only new thing is that we're getting the list items from data we're pulling from the forms)