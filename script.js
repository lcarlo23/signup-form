const pass = document.querySelector('#password');
const confPass = document.querySelector('#confPass');
const form = document.querySelector('form');

function matchPw() {
    if (pass.value != confPass.value) {
        pass.setCustomValidity('Passwords do not match');
        confPass.setCustomValidity('Passwords do not match');
    } else {
        pass.setCustomValidity('');
        confPass.setCustomValidity('');
    }
}

form.addEventListener('input', matchPw);