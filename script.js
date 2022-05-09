import { firstLine } from './en.js';
import { secondLine } from './en.js';
import { thirdLine } from './en.js';
import { forthLine } from './en.js';
import { fifthLine } from './en.js';

let body = document.querySelector('body');
let currentLanguage = 'en';

const allContainer = document.createElement('div');
allContainer.className = 'container';
body.append(allContainer);

const textInput = document.createElement('textarea');
textInput.className = 'text';
textInput.setAttribute('type', 'text');
allContainer.append(textInput);

const nightMode = document.createElement('div');
nightMode.className = 'night_mode';
nightMode.innerHTML = `<div class="toggle_circle"></div>`;
allContainer.append(nightMode);

const changeLightColor = document.createElement('div');
changeLightColor.className = 'change_light_color';
changeLightColor.innerHTML = `<div class="colors">
<input class="colors_input" type="color" />
</div>`;
allContainer.append(changeLightColor);

const keyboardWrap = document.createElement('div');
keyboardWrap.className = 'keyboard-wrap';
keyboardWrap.innerHTML = `<div class="keyboard_lights"></div>`;
allContainer.append(keyboardWrap);

const keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard-keys';
keyboardWrap.append(keyboardKeys);

const keyFirstLine = document.createElement('div');
keyFirstLine.className = 'row first_line';
keyboardKeys.append(keyFirstLine);

const keySecondLine = document.createElement('div');
keySecondLine.className = 'row second_line';
keyboardKeys.append(keySecondLine);

const keyThirdLine = document.createElement('div');
keyThirdLine.className = 'row third_line';
keyboardKeys.append(keyThirdLine);

const keyForthLine = document.createElement('div');
keyForthLine.className = 'row forth_line';
keyboardKeys.append(keyForthLine);

const keyFifthLine = document.createElement('div');
keyFifthLine.className = 'row fifth_line';
keyboardKeys.append(keyFifthLine);

const addKeysToDom = (lang = 'en') => {
  keyFirstLine.innerHTML = '';
  keySecondLine.innerHTML = '';
  keyThirdLine.innerHTML = '';
  keyForthLine.innerHTML = '';
  keyFifthLine.innerHTML = '';

  firstLine.forEach((element) => {
    const key = document.createElement('div');
    key.className = 'keys';
    key.innerHTML = `${element[lang].keyname}`;
    key.setAttribute('keyname', element[lang].keyname);
    key.setAttribute('lowerCaseName', element[lang].keyname.toLowerCase());
    key.setAttribute('code', element[lang].code);

    if (element[lang].class) {
      key.classList.add(element[lang].class);
    }
    keyFirstLine.append(key);
  });

  secondLine.forEach((element) => {
    const key = document.createElement('div');
    key.className = 'keys';
    key.innerHTML = `${element[lang].keyname}`;
    key.setAttribute('keyname', element[lang].keyname);
    key.setAttribute('lowerCaseName', element[lang].keyname.toLowerCase());
    key.setAttribute('code', element[lang].code);

    if (element[lang].class) {
      key.classList.add(element[lang].class);
    }
    keySecondLine.append(key);
  });

  thirdLine.forEach((element) => {
    const key = document.createElement('div');
    key.className = 'keys';
    key.innerHTML = `${element[lang].keyname}`;
    key.setAttribute('keyname', element[lang].keyname);
    key.setAttribute('lowerCaseName', element[lang].keyname.toLowerCase());
    key.setAttribute('code', element[lang].code);

    if (element[lang].class) {
      key.classList.add(element[lang].class);
    }
    keyThirdLine.append(key);
  });

  forthLine.forEach((element) => {
    const key = document.createElement('div');
    key.className = 'keys';
    key.innerHTML = `${element[lang].keyname}`;
    key.setAttribute('keyname', element[lang].keyname);
    key.setAttribute('lowerCaseName', element[lang].keyname.toLowerCase());
    key.setAttribute('code', element[lang].code);

    if (element[lang].class) {
      key.classList.add(element[lang].class);
    }

    if (element[lang].icon === 'keyboard_arrow_up') {
      key.innerHTML = `<span class="material-icons">
      keyboard_arrow_up
      </span>`;
    }

    keyForthLine.append(key);
  });

  fifthLine.forEach((element) => {
    const key = document.createElement('div');
    key.className = 'keys';
    key.innerHTML = `${element[lang].keyname}`;
    key.setAttribute('keyname', element[lang].keyname);
    key.setAttribute('lowerCaseName', element[lang].keyname.toLowerCase());
    key.setAttribute('code', element[lang].code);

    if (element[lang].class) {
      key.classList.add(element[lang].class);
    }

    if (element[lang].icon === 'keyboard_arrow_left') {
      key.innerHTML = `<span class="material-icons">
      keyboard_arrow_left
      </span>`;
    }

    if (element[lang].icon === 'keyboard_arrow_down') {
      key.innerHTML = `<span class="material-icons">
      keyboard_arrow_down
      </span>`;
    }

    if (element[lang].icon === 'keyboard_arrow_right') {
      key.innerHTML = `<span class="material-icons">
      keyboard_arrow_right
      </span>`;
    }

    if (element[lang].icon === 'language') {
      key.innerHTML = `<span class="material-icons">
      language
      </span>`;
    }

    keyFifthLine.append(key);
  });
};

keyboardWrap.addEventListener('click', function (e) {
  let keys = document.querySelectorAll('.keys');
  let spaceKey = document.querySelector('.space_key');
  let backspaceKey = document.querySelector('.backspace_key');
  let capsLockKey = document.querySelector('.caps_lock_key');
  let tabKey = document.querySelector('.tab_key');
  let shiftLeft = document.querySelector('.shift_left');
  let shiftRight = document.querySelector('.shift_right');
  let controlKeyLeft = document.querySelector('.control_key_left');
  let controlKeyRight = document.querySelector('.control_key_right');
  let altLeft = document.querySelector('.alt_left');
  let altRight = document.querySelector('.alt_right');
  let upKey = document.querySelector('.up_key');
  let leftKey = document.querySelector('.left_key');
  let downKey = document.querySelector('.down_key');
  let rightKey = document.querySelector('.right_key');
  let enterKey = document.querySelector('.enter_key');
  let changeLang = document.querySelector('.change_lang');

  console.log('my log:', e.target.closest('.keys'));
  let key = e.target.closest('.keys');
  if (key.getAttribute('keyname') || key.getAttribute('lowerCaseName')) {
    key.classList.add('active');
    key.classList.add('remove');
  }
  setTimeout(() => {
    key.classList.remove('active');
    key.classList.remove('remove');
  }, 200);

  console.log(key.getAttribute('code'));

  if (key.getAttribute('code') == 'Space') {
    spaceKey.classList.add('active');
    textInput.innerHTML = textInput.innerHTML + ' ';
    return;
  }

  if (key.getAttribute('code') == 'ShiftLeft') {
    shiftRight.classList.remove('active');
    shiftRight.classList.remove('remove');
    return;
  }
  if (key.getAttribute('code') == 'ShiftRight') {
    shiftLeft.classList.remove('active');
    shiftLeft.classList.remove('remove');
    return;
  }
  let capslokState;
  if (key.getAttribute('code') == 'CapsLock') {
    capsLockKey.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'Backspace') {
    backspaceKey.classList.add('active');
    textInput.innerHTML = textInput.innerHTML.slice(0, -1);
    return;
  }
  if (key.getAttribute('code') == 'ControlLeft') {
    controlKeyLeft.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'ControlRight') {
    controlKeyRight.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'AltLeft') {
    altRight.classList.remove('active');
    altRight.classList.remove('remove');
    return;
  }
  if (key.getAttribute('code') == 'AltRight') {
    altLeft.classList.remove('active');
    altLeft.classList.remove('remove');
    return;
  }
  if (key.getAttribute('code') == 'ArrowUp') {
    upKey.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'ArrowLeft') {
    leftKey.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'ArrowDown') {
    downKey.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'ArrowRight') {
    rightKey.classList.add('active');
    return;
  }
  if (key.getAttribute('code') == 'Enter') {
    enterKey.classList.add('active');
    textInput.focus();
    return;
  }
  if (key.getAttribute('code') == 'Tab') {
    tabKey.classList.add('active');
    textInput.innerHTML = textInput.innerHTML + '  ';
    return;
  }

  if (key.getAttribute('code') == 'MetaLeft') {
    changeLang.classList.add('active');

    if (currentLanguage === 'en') {
      currentLanguage = 'ru';
      addKeysToDom(currentLanguage);
    } else {
      currentLanguage = 'en';
      addKeysToDom(currentLanguage);
    }
    return;
  }
  textInput.innerHTML = textInput.innerHTML + key.getAttribute('keyname');
});

body.addEventListener('keydown', function (e) {
  let keys = document.querySelectorAll('.keys');
  let spaceKey = document.querySelector('.space_key');
  let backspaceKey = document.querySelector('.backspace_key');
  let capsLockKey = document.querySelector('.caps_lock_key');
  let tabKey = document.querySelector('.tab_key');
  let shiftLeft = document.querySelector('.shift_left');
  let shiftRight = document.querySelector('.shift_right');
  let controlKeyLeft = document.querySelector('.control_key_left');
  let controlKeyRight = document.querySelector('.control_key_right');
  let altLeft = document.querySelector('.alt_left');
  let altRight = document.querySelector('.alt_right');
  let upKey = document.querySelector('.up_key');
  let leftKey = document.querySelector('.left_key');
  let downKey = document.querySelector('.down_key');
  let rightKey = document.querySelector('.right_key');
  let enterKey = document.querySelector('.enter_key');
  let changeLang = document.querySelector('.change_lang');

  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute('keyname') ||
      e.key == keys[i].getAttribute('lowerCaseName')
    ) {
      keys[i].classList.add('active');
    }
  }

  if (e.code == 'Space') {
    spaceKey.classList.add('active');
  }
  if (e.code === 'ShiftLeft') {
    shiftRight.classList.remove('active');
  }
  if (e.code == 'ShiftRight') {
    shiftLeft.classList.remove('active');
  }
  if (e.code == 'CapsLock') {
    capsLockKey.classList.add('active');
  }
  if (e.code == 'Backspace') {
    backspaceKey.classList.add('active');
  }
  if (e.code == 'ControlLeft') {
    controlKeyLeft.classList.add('active');
  }
  if (e.code == 'ControlRight') {
    controlKeyRight.classList.add('active');
  }
  if (e.code == 'AltLeft') {
    altRight.classList.remove('active');
  }
  if (e.code == 'AltRight') {
    altLeft.classList.remove('active');
  }
  if (e.code == 'ArrowUp') {
    upKey.classList.add('active');
  }
  if (e.code == 'ArrowLeft') {
    leftKey.classList.add('active');
  }
  if (e.code == 'ArrowDown') {
    downKey.classList.add('active');
  }
  if (e.code == 'ArrowRight') {
    rightKey.classList.add('active');
  }
  if (e.code == 'Enter') {
    enterKey.classList.add('active');
    textInput.focus();
  }
  if (e.code == 'Tab') {
    tabKey.classList.add('active');
    e.preventDefault();
    textInput.setRangeText(
      '  ',
      textInput.selectionStart,
      textInput.selectionStart,
      'end',
    );
  }

  if (e.code == 'MetaLeft') {
    changeLang.classList.add('active');
  }
  console.log(e);
  // console.log(e.target.closest('.keys'));
});

window.addEventListener('keyup', function (e) {
  let keys = document.querySelectorAll('.keys');
  let spaceKey = document.querySelector('.space_key');
  let backspaceKey = document.querySelector('.backspace_key');
  let capsLockKey = document.querySelector('.caps_lock_key');
  let tabKey = document.querySelector('.tab_key');
  let shiftLeft = document.querySelector('.shift_left');
  let shiftRight = document.querySelector('.shift_right');
  let controlKeyLeft = document.querySelector('.control_key_left');
  let controlKeyRight = document.querySelector('.control_key_right');
  let altLeft = document.querySelector('.alt_left');
  let altRight = document.querySelector('.alt_right');
  let upKey = document.querySelector('.up_key');
  let leftKey = document.querySelector('.left_key');
  let downKey = document.querySelector('.down_key');
  let rightKey = document.querySelector('.right_key');
  let enterKey = document.querySelector('.enter_key');
  let changeLang = document.querySelector('.change_lang');

  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute('keyname') ||
      e.key == keys[i].getAttribute('lowerCaseName')
    ) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
  if (e.code == 'Space') {
    spaceKey.classList.remove('active');
    spaceKey.classList.add('remove');
  }

  if (e.code == 'ShiftLeft') {
    shiftRight.classList.remove('active');
    shiftRight.classList.remove('remove');
  }
  if (e.code == 'ShiftRight') {
    shiftLeft.classList.remove('active');
    shiftLeft.classList.remove('remove');
  }
  if (e.code == 'CapsLock') {
    capsLockKey.classList.remove('active');
    capsLockKey.classList.add('remove');
  }
  if (e.code == 'Backspace') {
    backspaceKey.classList.remove('active');
    backspaceKey.classList.remove('remove');
  }
  if (e.code == 'ControlLeft') {
    controlKeyLeft.classList.remove('active');
    controlKeyLeft.classList.remove('remove');
  }
  if (e.code == 'ControlRight') {
    controlKeyRight.classList.remove('active');
    controlKeyRight.classList.remove('remove');
  }
  if (e.code == 'AltLeft') {
    altRight.classList.remove('active');
    altRight.classList.remove('remove');
  }
  if (e.code == 'AltRight') {
    altLeft.classList.remove('active');
    altLeft.classList.remove('remove');
  }
  if (e.code == 'ArrowUp') {
    upKey.classList.remove('active');
    upKey.classList.remove('remove');
  }
  if (e.code == 'ArrowLeft') {
    leftKey.classList.remove('active');
    leftKey.classList.remove('remove');
  }
  if (e.code == 'ArrowDown') {
    downKey.classList.remove('active');
    downKey.classList.remove('remove');
  }
  if (e.code == 'ArrowRight') {
    rightKey.classList.remove('active');
    rightKey.classList.remove('remove');
  }
  if (e.code == 'Enter') {
    enterKey.classList.remove('active');
    enterKey.classList.remove('remove');
  }
  if (e.code == 'Tab') {
    tabKey.classList.remove('active');
    tabKey.classList.remove('remove');
  }

  if (e.code == 'MetaLeft') {
    changeLang.classList.remove('active');
    changeLang.classList.remove('remove');
    if (currentLanguage === 'en') {
      currentLanguage = 'ru';
      addKeysToDom(currentLanguage);
    } else {
      currentLanguage = 'en';
      addKeysToDom(currentLanguage);
    }
  }
});

let toggleCircle = document.querySelector('.toggle_circle');
nightMode.addEventListener('click', function () {
  let keys = document.querySelectorAll('.keys');
  toggleCircle.classList.toggle('active');
  body.classList.toggle('active');
  nightMode.classList.toggle('active');
  keyboardWrap.classList.toggle('active');
  textInput.classList.toggle('active');
  changeLightColor.classList.toggle('active');

  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle('keys_night');
  }
});
let colorsInput = document.querySelector('.colors_input');
let keyboardLights = document.querySelector('.keyboard_lights');
colorsInput.addEventListener('input', function () {
  let keys = document.querySelectorAll('.keys');
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color == colorsInput.value;
  }
  keyboardLights.style.background = colorsInput.value;
});

function getLocalStorage() {
  if (localStorage.getItem('currentLanguage')) {
    currentLanguage = localStorage.getItem('currentLanguage');
  }
  addKeysToDom(currentLanguage);
}
window.addEventListener('load', getLocalStorage);
function setLocalStorage() {
  localStorage.setItem('currentLanguage', currentLanguage);
}
window.addEventListener('beforeunload', setLocalStorage);
