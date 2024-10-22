const getStartedBtns = document.querySelectorAll('.get_started_btn');
const subscribeBtn = document.getElementById('subscribe_btn');

for (const btn of getStartedBtns) {
    btn.addEventListener('click', () => {
        window.location.href = './levels/levels.html';
    })
}

subscribeBtn.onclick = () => {
    alert("Thanks for subscribing")
}

// Scrolling event
window.onscroll = function() {
    const ele = document.querySelector("header");
    if (window.scrollY > 10) {
        ele.classList.add('scrolled');
        console.log("this");
        
    }
    else {
        ele.classList.remove('scrolled');
    }
}