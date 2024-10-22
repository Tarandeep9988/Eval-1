const beginnerBox = document.getElementById('beginner_box');


const defaultLogoUrl = "./images/person_running.png"
const beginnerLevels = [
    {
      level: 1,
      icon: defaultLogoUrl,
      name: "Home Row Keys Familiarization",
      content: "Get comfortable with the home row keys (ASDF and JKL;). Practice pressing these keys repeatedly to build muscle memory."
    },
    {
      level: 2,
      icon: defaultLogoUrl,
      name: "Thumb for Spacebar",
      content: "Learn to use your thumb to press the spacebar. Practice typing the home row keys followed by a space to get used to this action."
    },
    {
      level: 3,
      icon: defaultLogoUrl,
      name: "Typing Single Letters",
      content: "Type each home row key individually. Focus on accuracy and hand positioning."
    },
    {
      level: 4,
      icon: defaultLogoUrl,
      name: "Combination of Home Row Keys",
      content: "Type random combinations of home row keys. This will help you get used to transitioning between different keys without losing hand positioning."
    },
    {
      level: 5,
      icon: defaultLogoUrl,
      name: "Typing Simple Words",
      content: "Type simple words using only home row keys, such as 'sad,' 'lad,' or 'jkl.' Start combining letters to form words and improve speed."
    },
    {
      level: 6,
      icon: defaultLogoUrl,
      name: "Accuracy Focus",
      content: "Focus on typing accurately without making any errors. In this sublevel, take your time to ensure that each letter is correct."
    }
  ];
  
  

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
addBeginnerLevels();