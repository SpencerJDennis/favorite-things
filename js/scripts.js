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

const ul = document.createElement("ul");

const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const liThree = document.createElement("li");

liOne.append(secondItem)
liTwo.append(firstItem);
liThree.append(thirdItem)
ul.append(liOne, liTwo, liThree);
document.body.append(ul);
}