let obj = {
    "name": "Quan",
    "job": "Massage for dev"
}
console.log (obj);
async function getUser() {
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(obj)
    });
    console.log( await response.json());
    console.log(response)
}

getUser();


const userName = document.getElementById('username');
const password = document.getElementById('password');
const btn_logIn = document.getElementById('btn_login');
const adminContent = document.getElementById('admin')
btn_logIn.addEventListener('click', () => {
    console.log(userName.value);
    console.log(password.value);
    if (userName.value == 'admin' && password.value == '1234') {
        adminContent.display == "block";
    }
});

let quizz = [{
    'questions': 'Indentify the mistake',
    'wrong_answer': ['Ben is a student', 'He is in the library'],
    'correct_answer': 'He is no in class now',
    'hint': 'Grammar mistake',
}]