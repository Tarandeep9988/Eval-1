import { beginnerLevels, intermediateLevels, advancedLevels } from './levels.js';


const beginnerBox = document.getElementById('beginner_box');
const intermediateBox = document.getElementById('intermediate_box');
const AdvancedBox = document.getElementById('advanced_box');
const toTopArrow = document.getElementById('to-top-arrow')
const header = document.querySelector("header");
const loginBtn = document.getElementById('login_btn');



function createLevelBox(targetBox, data) {
    const levelBox = document.createElement('div');
    levelBox.className = 'level_box';

    const levelNum = document.createElement('div');
    levelNum.className = 'level_num';
    levelNum.textContent = data.level; 

    const levelIcon = document.createElement('div');
    levelIcon.className = 'level_icon';
    const img = document.createElement('img');
    img.src = data.icon; 
    img.alt = 'logo';
    img.width = 100;
    levelIcon.appendChild(img);

    const levelName = document.createElement('div');
    levelName.className = 'level_name';
    levelName.textContent = data.name;

    levelBox.appendChild(levelNum);
    levelBox.appendChild(levelIcon);
    levelBox.appendChild(levelName);

    targetBox.appendChild(levelBox);

    // Adding eventListener to levels
    levelBox.addEventListener('click', () => {
      // Storing content on local storage
      window.localStorage.setItem('content', data.content);

      window.location.href ="../typing testing/index.html";
    })
}

function addBeginnerLevels() {
    for (const level of beginnerLevels) {
        createLevelBox(beginnerBox, level)
    }
}
function addIntermediateLevels() {
    for (const level of intermediateLevels) {
        createLevelBox(intermediateBox, level)
    }
}
function addAdvancedLevels() {
    for (const level of advancedLevels) {
        createLevelBox(AdvancedBox, level)
    }
}
addBeginnerLevels();
addIntermediateLevels();
addAdvancedLevels();

// Scrolling event
window.onscroll = function() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        toTopArrow.style.opacity = "1"
        toTopArrow.style.visibility = "visible"
    }
    else {
        header.classList.remove('scrolled');
        toTopArrow.style.opacity = "0"
        toTopArrow.style.visibility = "hidden"
    }
}

toTopArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });    
})

// login buttion logic
if (localStorage.getItem('isLoggedIn') === 'true') {
    loginBtn.innerHTML = "Logout";
}
else {
    loginBtn.innerHTML = "Login";
}

loginBtn.addEventListener('click', () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        localStorage.setItem('isLoggedIn', 'false');
        alert('Logged out successfully')
        loginBtn.innerHTML = "Login";
    }
    else {
        window.location.href = '../login page/login.html';
    }
});