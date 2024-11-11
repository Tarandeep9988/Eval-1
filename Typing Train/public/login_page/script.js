const userField = document.getElementById('user');
const passField = document.getElementById('user_pass');

const lgnBtn = document.getElementById('login_btn');

lgnBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = userField.value;
    const pass = passField.value;
    const sampleUser = 'admin';
    const samplePass = 'admin';
    if (user === sampleUser && pass === samplePass) {
        alert('Login Successful');
        window.localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '../index.html';
    } else {
        alert('Login Failed || Invalid Credentials');
    }
});