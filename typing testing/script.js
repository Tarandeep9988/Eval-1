const typingArea = document.getElementById('typing_area');
const displayPara = document.getElementById('para_to_type');
const speedDisplay = document.getElementById('typ-speed');
const accuracyDisplay = document.getElementById('typ-accuracy');
const btn = document.getElementById('btn');

const paraText = "This is the sample paragraph to type";

let startTime, endTime;

function startTest() {
    displayPara.innerText = paraText
    speedDisplay.innerText = "";
    typingArea.removeAttribute('Disabled');
    startTime = Date.now();
}

function stopTest() {
    displayPara.innerText = "--DONE--";
    typingArea.setAttribute('Disabled','');
    endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    const numberOfWords = typingArea.value.split(' ').length;
    console.log(numberOfWords);
    const typing_speed = (numberOfWords * 60) / timeTaken;
    speedDisplay.innerText = typing_speed;
}

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    const btnValue = btn.innerText;
    switch (btnValue) {
        case "Start":
            btn.innerText = "Stop";
            startTest();
            break;
        case "Stop":
            stopTest();
            btn.innerText = "Start";  
    }
})