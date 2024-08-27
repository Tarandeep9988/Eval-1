const content_box = document.getElementById('content_box');
const input_field = document.getElementById('input_field');
const button = document.getElementById('start_stop_btn');
const speed_tag = document.getElementById('speed');
const accuracy_tag = document.getElementById('accuracy');

const default_content = "HERE TEXT WILL BE DISPLAYED";
const content = "A quick brown fox jumps over the lazy dog";
var starting_time = new Date();
content_box.textContent = default_content;

function startTypingTest() {
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