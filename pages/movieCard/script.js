let id = location.search.split('=').at(-1)
let base_url = 'https://api.themoviedb.org/3/'
let main = document.querySelector('.main')
let pyt = document.querySelector('.pyt')
let poster = document.querySelector('.left')
let title = document.querySelector('.title')
let descr = document.querySelector('.descr')
let orig = document.querySelector('.orig_title')


fetch(base_url + 'movie/now_playing?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => mahoraga(res.results))

function mahoraga(arr){
    for(let item of arr){
        if(+item.id === +id){
            // main.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${item.backdrop_path})`
            pyt.innerHTML = `Main > Films > ${item.title}`
            poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.poster_path})`
            title.innerHTML = item.title
            orig.innerHTML = item.original_title
            descr.innerHTML = item.overview 
        }
    }
}