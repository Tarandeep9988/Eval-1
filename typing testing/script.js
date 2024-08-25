const content_box = document.getElementById('content_box');
const input_field = document.getElementById('input_field');
const button = document.getElementById('start_stop_btn');
const speed_tag = document.getElementById('speed');
const accuracy_tag = document.getElementById('accuracy');

const default_content = "HERE TEXT WILL BE DISPLAYED";
const content = "Artificial intelligence (AI) has rapidly evolved over the past few decades, transforming various aspects of modern life. AI encompasses a range of technologies designed to mimic human intelligence, including machine learning, natural language processing, and robotics. These advancements have led to significant breakthroughs in fields such as healthcare, where AI is used for diagnosing diseases and personalizing treatment plans. In finance, AI algorithms help in predicting market trends and automating trading. As AI continues to develop, it promises to revolutionize industries by enhancing efficiency, improving decision-making, and creating new opportunities for innovation. However, it also raises ethical and societal concerns that need to be addressed to ensure responsible use of these powerful technologies.";
var starting_time = new Date();

content_box.textContent = default_content;

function startTypingTest() {
    speed_tag.textContent = "-";
    input_field.value = '';
    starting_time = Date.now();
    content_box.textContent = content;
    input_field.focus()
}

function stopTypingTest() {
    const typed_content = input_field.value;
    const num_of_words = typed_content.split(' ').length;
    const time_taken = (Date.now() - starting_time) / 1000;
    console.log(time_taken);
    const speedWPM = (num_of_words * 60) / time_taken
    speed_tag.textContent = String(Math.round(speedWPM, 1));
    content_box.textContent = default_content;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    switch (button.innerText) {
        case 'Start':
                button.innerText = 'Stop';
                startTypingTest();
            break;
            
            case 'Stop':
                button.innerText = 'Start';
                stopTypingTest();
            break;
    }
});