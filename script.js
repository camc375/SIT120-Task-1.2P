// String Methods
const str = "Hello, World!";
document.getElementById("output-length").innerText = str.length; // Displaying the length of the string
document.getElementById("output-uppercase").innerText = str.toUpperCase(); // Displaying the string in uppercase
document.getElementById("output-lowercase").innerText = str.toLowerCase(); // Displaying the string in lowercase
document.getElementById("output-substring").innerText = str.substring(0, 5); // Displaying a substring of the original string
document.getElementById("output-index").innerText = str.indexOf("World"); // Displaying the index of 'World' in the string

// Number Methods
const num = 12.345;
document.getElementById("output-toFixed").innerText = num.toFixed(2); // Displaying the number with two decimal places
document.getElementById("output-toPrecision").innerText = num.toPrecision(2); // Displaying the number in exponential notation with two significant digits
document.getElementById("output-toExponential").innerText = num.toExponential(2); // Displaying the number in exponential notation with two decimal places
document.getElementById("output-max").innerText = Math.max(10, 20, 30, 40, 50); // Displaying the maximum value from a list of numbers
document.getElementById("output-min").innerText = Math.min(10, 20, 30, 40, 50); // Displaying the minimum value from a list of numbers

// Array Methods
const fruits = ["apple", "banana", "cherry"];
const evens = [2, 4, 6];
document.getElementById("output-arrayLength").innerText = fruits.length; // Displaying the number of elements in the fruit array
document.getElementById("output-join").innerText = fruits.join(", "); // Displaying the elements of the fruit array joined into a string
document.getElementById("output-push").innerText = evens.push(8); // Displaying the new length of the even numbers array after adding an element
document.getElementById("output-pop").innerText = evens.pop(); // Displaying the removed element from the end of the even numbers array
document.getElementById("output-indexOf").innerText = fruits.indexOf("banana"); // Displaying the index of 'banana' in the fruit array

// Date Methods
const now = new Date();
document.getElementById("output-currentDate").innerText = now.toLocaleDateString(); // Displaying the current date in a human-readable format
document.getElementById("output-currentTime").innerText = now.toLocaleTimeString(); // Displaying the current time in a human-readable format
document.getElementById("output-dayOfWeek").innerText = now.getDay(); // Displaying the day of the week (0 for Sunday, 1 for Monday, etc.)
document.getElementById("output-month").innerText = now.getMonth(); // Displaying the month (0 for January, 1 for February, etc.)
document.getElementById("output-year").innerText = now.getFullYear(); // Displaying the current year as a four-digit number

// Function Methods
function greet(...names) {
    return "Hello, " + names + "!";
}

function getProduct(a, b) {
    return a * b;
}
document.getElementById("output-functionCall").innerText = getProduct.call(null, 4, 5); // Calling the getProduct function with individual arguments
document.getElementById("output-functionApply").innerText = greet.apply(null, ["Larry", " Moe", " Tommy"]); // Calling the greet function with an array of arguments
