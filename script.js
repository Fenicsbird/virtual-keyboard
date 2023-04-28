// title
let titleDiv = document.createElement('div');
titleDiv.className = "title";
titleDiv.innerHTML = "RSS Virtual Keyboard";
document.body.appendChild(titleDiv);

// input window
let inputDiv = document.createElement('div');
inputDiv.className = "input";
document.body.appendChild(inputDiv);

// keyboard
function createVirtualKeyboard() {
// Create a div to hold the virtual keyboard
  const keyboardDiv = document.createElement('div');
  keyboardDiv.className = "wrapper";
// Define the keys on the virtual keyboard
  const keys = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "Del",
    "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", " ", "Shift",
    "Ctrl", "Win", "Alt", "  ", "Alt", " ", " ", " ", "Ctrl"
    ];
// Loop through the keys and create a button for each one
  for (let i = 0; i < keys.length; i++) {
    const button = document.createElement("button");
    button.className = "keyboard__btn"
    button.textContent = keys[i];

    button.addEventListener("click", () => {
// Update the input field with the clicked key
    const inputField = document.querySelector("input");
    inputField.value += keys[i];
    });
    keyboardDiv.appendChild(button);
  }
// Add the virtual keyboard to the document
    document.body.appendChild(keyboardDiv);
}
createVirtualKeyboard();

