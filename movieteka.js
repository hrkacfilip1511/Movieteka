//header --------

const nav = document.querySelector('.nav');
const search = document.querySelector('.search')

search.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
  });

search.addEventListener('blur', (e) => {
    e.target.style.background = 'white'
})

window.addEventListener('scroll', changeNav)
function changeNav() {
    if(window.scrollY > 500){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}

//Carousel --------

const carouselImages = document.querySelector('.carousel-images')
const imgs = document.querySelectorAll('.carousel-images img')

let carouselSlider = 0;
let btnSlider = 0;

const btn1 = document.querySelector('.movieBtn1')
const btn2 = document.querySelector('.movieBtn2')
const btn3 = document.querySelector('.movieBtn3')
const btn4 = document.querySelector('.movieBtn4')
const buttons = document.querySelectorAll('.button-container button')


buttons[carouselSlider].classList.add('active')
let interval = setInterval(run, 2000)

btn1.addEventListener('click', goToFirstMov);
btn2.addEventListener('click', goToSecMov);
btn3.addEventListener('click', goToThirdMov);
btn4.addEventListener('click', goToLastMov);
function run() {
    carouselSlider++;
    changeMovie()
}

function changeMovie() {
    if(carouselSlider > imgs.length - 1){
        carouselSlider = 0
    }
    if(carouselSlider < 0){
        carouselSlider = imgs.length - 1
    }
    removeActiveClass()
    carouselImages.style.transform = `translateX(${-carouselSlider * 880}px)` 
    buttons[carouselSlider].classList.add('active')
}

function removeActiveClass() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
}



function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2500)
}
function goToFirstMov() {
    carouselSlider = 0
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    changeMovie()
    resetInterval()
}
function goToSecMov() {
    carouselSlider = 1
    btn1.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    changeMovie()
    resetInterval()
}
function goToThirdMov() {
    carouselSlider = 2
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.add('active')
    btn4.classList.remove('active')
    changeMovie()
    resetInterval()
}
function goToLastMov() {
    carouselSlider = 3
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.add('active')
    changeMovie()
    resetInterval()
}

// Fetching Movies ------------

const url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-10-22&api_key=cd0911c95e8e111988718f4e8e7b2913'
const imgUrl = 'https://image.tmdb.org/t/p/w300'
const searchPath = 'http://api.themoviedb.org/3/search/movie?api_key=cd0911c95e8e111988718f4e8e7b2913&query="'
const mainMovies = document.querySelector('.movies');
const form = document.querySelector('.form')

getMovies(url)

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data=>showMovies(data.results))
}

function showMovies(movies){
    console.log(movies)
    mainMovies.innerHTML = ''
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        const {title, vote_average, poster_path, release_date, overview} = movie
        movieEl.innerHTML = `
        <img src="${imgUrl + poster_path}" alt="${title}">
        <div class="movie-info">
            <h2 class="title">${title}</h2>
            <span class='${getVote(vote_average)}'>${vote_average}</span>
            <p>${release_date}</p>
            </div>
        `
        mainMovies.appendChild(movieEl)
       
    })
}

function getVote(vote){
    if(vote <= 5.5){
        return 'red'
    }
    else if(vote>=8){
        return 'green'
    }
    else{
        return 'orange'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getMovies(searchPath + searchTerm)
        search.value = ''
    }
    else{
        window.location.reload()
    }
})