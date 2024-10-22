const getStartedBtns = document.querySelectorAll('.get_started_btn');
const subscribeBtn = document.getElementById('subscribe_btn');
const toTopArrow = document.getElementById('to-top-arrow')
const header = document.querySelector("header");

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