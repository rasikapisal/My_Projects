let string = " ";  //whatever it is in the input div
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;

    }
    else if (e.target.innerHTML == 'C') {
      string = " ";
      document.querySelector('input').value = string;

    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
const background = document.querySelector(".button");
const calculatorButtons = document.querySelectorAll(".button");

// Array of colors to cycle through
const colors = ["#f0f0f0", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];

let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
  background.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Add click event listeners to calculator buttons
calculatorButtons.forEach(button => {
  button.addEventListener("click", changeBackgroundColor);
});
