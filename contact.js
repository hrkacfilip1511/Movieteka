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

//form------

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('mail')
const msgInput = document.getElementById('msg')
const submitBtn = document.querySelector('.submit')
const submitContainer = document.querySelector('.container-submit-message')

submitBtn.addEventListener('click', allClear)

function allClear() {
    if(nameInput.value !== '' && emailInput.value !== '' && msgInput.value !== '') {
        const clouds = document.createElement('div')
        clouds.classList.add('cloud')
        clouds.innerHTML = `
        <p>Dear ${nameInput.value}, <br> Your message is sent successfully. <br>
        If there is any criticism, We will try to fix that. <br>
        Cheers <i class="fas fa-heart"></i>
        </p>
        `    
        
        submitContainer.appendChild(clouds)
        setTimeout(() => allClear, 1000)
        setTimeout(() => clouds.remove(), 6500)
        nameInput.value = ''    
        emailInput.value = ''    
        msgInput.value = ''
    }
    else{
        alert('Fill in the required fields')
    }
}

// Opinion -----------

const opinionContainer = document.querySelector('.opinion-container')
const opinion = document.querySelector('.opinion')
const image = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const opinions = [
    {
        user: 'Mark Lones',
        position: 'Lawyer',
        thought: 'The Movieteka is the best web site for someone who is looking for the best movies by random category.',
        picture: 'https://randomuser.me/api/portraits/men/43.jpg'
    },
    {
        user: 'Norman Wright',
        position: 'Journalist',
        thought: 'This web page is more than useful. There is random movies from 90s and older, and there is many movies from 2020 or 2021. Blend of youth and experience.',
        picture: 'https://randomuser.me/api/portraits/men/13.jpg'
    },
    {
        user: 'Estelle Jones',
        position: 'Scientist',
        thought: 'I am not surprised with Movieteka. This was necessary a years ago. Starting from myself, when I am getting bored, I want watch some good movie, but I can not remember the title, and this is exactly what this page is for.',
        picture: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
        user: 'Lily Rod',
        position: 'Developer',
        thought: 'Movieteka is fun page, but some little things can improve, like movie suggestion in home page. There can be some small overview about that movie when I hover over them. But this page is rookie, I hope that will be upgraded soon. My mark is 7/10. Keep going!',
        picture: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
]


let indexOfOpinions = 1;

function updateOpinion() {

    const { user, position, thought, picture } = opinions[indexOfOpinions]

    opinion.innerHTML = thought
    image.src = picture
    username.innerHTML = user
    role.innerHTML = position

    indexOfOpinions++

    if(indexOfOpinions > opinions.length - 1){
        indexOfOpinions = 0
    }

}

setInterval(updateOpinion, 12000)