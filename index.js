// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to destructively prepend a cat to the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to a new array without alterinng the original
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to a new array without altering the original
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from a new array without modifying the original
function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}
