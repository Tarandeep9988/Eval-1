const getStartedBtns = document.querySelectorAll('.get_started_btn');

for (const btn of getStartedBtns) {
    btn.addEventListener('click', () => {
        window.location.href = './levels/levels.html';
    })
}