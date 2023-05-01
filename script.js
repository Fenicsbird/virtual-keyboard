// заголовок
const titleDiv = document.createElement('div');
titleDiv.className = "title";
titleDiv.innerHTML = "RSS Virtual Keyboard";
document.body.appendChild(titleDiv);

// окно ввода
const inputDiv = document.createElement('div');
inputDiv.className = "input";
document.body.appendChild(inputDiv);

// клавиатура
const keyboardDiv = document.createElement('div');
keyboardDiv.className = "wrapper";
document.body.appendChild(keyboardDiv);

// кнопки клавиатуры
const keys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back",
  "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|", "DEL",
  "Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
  "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "Shift",
  "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "◄", "▼", "►"];

function init() {
  let out = '';
  for (let i = 0; i < keys.length; i++) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += '<div class="clearfix"></div>';
    }
    out += '<div class="keyboard__btn" data="' + keys[i] + '">' + keys[i] + '</div>';
  }
  document.querySelector('.wrapper').innerHTML = out;
}
init();

// нажатие клавиши на физической клавиатуре выделяет клавишу на виртуальной клавиатуре
document.onkeydown = function(event) {
  console.log(event.key);
  document.querySelectorAll('.keyboard__btn').forEach(function(element) {
    element.classList.remove('active');
  });
  document.querySelector('.keyboard__btn[data="' + event.key + '"]').classList.add('active');
};

document.querySelectorAll('.keyboard__btn').forEach(function(element) {
  element.onclick = function(event) {
    document.querySelectorAll('.keyboard__btn').forEach(function(element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add('active');
  }
});

// нажатия кнопок на физической клавиатуре вводят символы в поле ввода
window.addEventListener("keydown", (event) => {
    const p = document.createElement("p");
    inputDiv.appendChild(p);
    p.textContent = `${event.key}`;
    window.scrollTo(0, document.body.scrollHeight);
  },
  true
);
