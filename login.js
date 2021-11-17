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

//form -------

const user_name = document.getElementById('user-name')
const password = document.getElementById('password')
const userIcon = document.querySelector('.fa-user-alt')
const passwordIcon = document.querySelector('.fa-key')
const submit = document.querySelector('.submit')


user_name.addEventListener('input', (e) => {
    if(user_name.value.charCodeAt(0) >= 65 && user_name.value.charCodeAt(0) <= 90){
        userIcon.classList.add('correct')
        userIcon.classList.remove('wrong')
    }
    else{
        userIcon.classList.add('wrong')
        userIcon.classList.remove('correct')
    }
    if(e.target.value === ''){
        userIcon.classList.remove('wrong')
        userIcon.classList.remove('correct')
    }
})

password.addEventListener('input', (e) => {
    const passValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ // 6 - 20 car (one digit, one uppercase and one lowercase)
    if(e.target.value.match(passValidator)){
        passwordIcon.classList.add('correct')
        passwordIcon.classList.remove('wrong')
    }
    else{
        passwordIcon.classList.add('wrong')
        passwordIcon.classList.remove('correct')
    }
    if(e.target.value === ''){
        passwordIcon.classList.remove('wrong')
        passwordIcon.classList.remove('correct')
    }
})
submit.addEventListener('click', welcome) 

function welcome() {
    if(userIcon.classList.contains('correct') && passwordIcon.classList.contains('correct')){
        alert(`Welcome ${user_name.value}`) 
    }
    else{
        alert('Upss..Something went wrong')
    }
}

