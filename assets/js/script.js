// auth key = 3a1d44f0ca0d9af05931a9a936c95ca4
// sort by popularity = /discover/movie?sort_by=popularity.desc

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a1d44f0ca0d9af05931a9a936c95ca4&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
const SERACH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3a1d44f0ca0d9af05931a9a936c95ca4&query="'


const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies 
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results);
}   

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SERACH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})