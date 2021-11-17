//header --------

const nav = document.querySelector('.nav');

window.addEventListener('scroll', changeNav)
function changeNav() {
    if(window.scrollY > 500){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}

// register form
const nameEl = document.getElementById('name')
const nameIcon = document.querySelector('.fa-user-alt')
const emailEl = document.getElementById('email')
const emailIcon = document.querySelector('.fa-envelope')
const password = document.getElementById('password');
const passIcon = document.querySelector('.fa-lock')
const confirmPassword = document.getElementById('conf-password')
const confirmPassIcon = document.querySelector('.fa-key')
const small = document.querySelector('.small-txt')
const checkedBox = document.getElementById('radio');
const submitBtn = document.querySelector('.registerBtn')

nameEl.addEventListener('input', () => {
    if(nameEl.value.charCodeAt(0) >= 65 && nameEl.value.charCodeAt(0) <= 90){
        nameIcon.classList.add('correct')
        nameIcon.classList.remove('wrong')
    }
    else{
        nameIcon.classList.add('wrong')
        nameIcon.classList.remove('correct') 
    }
    if(nameEl.value === ''){
        nameIcon.classList.remove('wrong')
        nameIcon.classList.remove('correct')
    }
})

emailEl.addEventListener('input', (e) => {
    const email_validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(e.target.value.match(email_validator)){
        emailIcon.classList.add('correct')
        emailIcon.classList.remove('wrong')
    }
    else{
        emailIcon.classList.add('wrong')
        emailIcon.classList.remove('correct')
    }
    if(e.target.value === ''){
        emailIcon.classList.remove('wrong')
        emailIcon.classList.remove('correct')
    }
})
let confirPas = ''
password.addEventListener('input', (e) => {
    const password_validator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ // 6 - 20 car (one digit, one uppercase and one lowercase)
    if(e.target.value.match(password_validator)){
        passIcon.classList.add('correct')
        passIcon.classList.remove('wrong')
        small.style.display = 'none'
    }
    else{
        passIcon.classList.add('wrong')
        passIcon.classList.remove('correct')
        small.style.display = 'block'

    }
    if(e.target.value === ''){
        small.style.display = 'none'
        passIcon.classList.remove('wrong')
        passIcon.classList.remove('correct')
    }
    confirPas = password.value.slice(0, password.length)
})

confirmPassword.addEventListener('input', (e) => {
    if(confirPas){
        if(e.target.value === confirPas){
            confirmPassIcon.classList.add('correct')
            confirmPassIcon.classList.remove('wrong')
        }
        else{
            confirmPassIcon.classList.add('wrong')
            confirmPassIcon.classList.remove('correct')
        }
        if(e.target.value === ''){
            confirmPassIcon.classList.remove('correct')
            confirmPassIcon.classList.remove('wrong')
        }
    }
})

submitBtn.addEventListener('click', () => {
    if(checkedBox.checked && nameIcon.classList.contains('correct') && emailIcon.classList.contains('correct') && passIcon.classList.contains('correct') && confirmPassIcon.classList.contains('correct')){
        alert(`Welcome ${nameEl.value}`)
    }
    else{
        alert('Upss..Something went wrong')
    }
})






