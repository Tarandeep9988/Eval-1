const content_box = document.getElementById('content_box');
const input_field = document.getElementById('input_field');
const button = document.getElementById('start_stop_btn');
const speed_tag = document.getElementById('speed');
const accuracy_tag = document.getElementById('accuracy');

const default_content = "HERE TEXT WILL BE DISPLAYED";
var starting_time = new Date();
content_box.textContent = default_content;

let content = new String;
// const typingPracticeParagraphs = [
//     "Typing is a skill that improves with practice. Focus on accuracy first, then speed.",
//     "Good posture is key to effective typing. Sit up straight and keep your wrists relaxed.",
//     "Consistency is important. Regular practice helps build muscle memory and speed.",
//     "Typing without looking at the keys can boost your speed. Try to memorize the key positions.",
//     "Accuracy matters more than speed when you start. It’s easier to type fast once you’re accurate."
//   ];

// function insertRandomContent() {
    
//     const random = Math.floor(Math.random() * (typingPracticeParagraphs.length)) % 5;
//     content = typingPracticeParagraphs[random];
// }

function insertContent() {
    content = window.localStorage.getItem('content');
}

function startTypingTest() {
    insertContent();
    button.innerText = 'Stop';
    input_field.removeAttribute('disabled');
    speed_tag.textContent = "-";
    input_field.value = '';
    starting_time = Date.now();
    content_box.textContent = content;
    input_field.focus();
    input_field.addEventListener('input', (e) => {
        const typed_content = input_field.value;
        const typed_length = typed_content.length;
        // Calculating the time taken
        const time_taken = (Date.now() - starting_time) / 60000; // milliseconds->minutes
        // Calculating speed
        const words_typed = typed_content.split(" ").length;
        const speedWPM = (words_typed / time_taken);
        // Calculating accuracy
        let errors = 0;
        for (let i = 0; i < typed_length; i++) {
            if (!(typed_content[i] === content[i])) {
                errors++;
                console.log("Error");
            }
        }
        if (errors > 0) {
            input_field.style.backgroundColor = 'red';
        }
        else {
            input_field.style.backgroundColor = 'white';
        }
        const accuracy = ((typed_length - errors) / typed_length) * 100;

        if (typed_length === content.length) {
            stopTypingTest();
        }
        // Plugging values of speed and accuracy
        speed_tag.textContent = typed_length ? String(Math.round(speedWPM, 1)) : String(0);
        accuracy_tag.textContent = String(Math.round(accuracy, 1));
    });
    
}

function stopTypingTest() {
    button.innerText = 'Start';
    input_field.style.backgroundColor = 'white';
    input_field.setAttribute('disabled', '');
    content_box.textContent = default_content;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    switch (button.innerText) {
        case 'Start':
                startTypingTest();
            break;
            
            case 'Stop':
                stopTypingTest();
            break;
    }
});