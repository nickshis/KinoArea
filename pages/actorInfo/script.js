let id = location.search.split('=').at(-1)
let base_url = 'https://api.themoviedb.org/3/'
let pyt = document.querySelector('.pyt')
let poster = document.querySelector('.left')
let title = document.querySelector('.title')
let descr = document.querySelector('.descr')
let orig = document.querySelector('.orig_title')
let rate = document.querySelector('.rate')
let age = document.querySelector('.age')
let films = document.querySelector('.films')
let place = document.querySelector('.place')


fetch(base_url + `person/${id}`, {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => mahoraga(res))

function mahoraga(arr){
    pyt.innerHTML = `Main > Actors > ${arr.name}`
    poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${arr.profile_path})`
    orig.innerHTML = arr.name
    title.innerHTML = arr.name
    descr.innerHTML = arr.biography.length > 300 ? arr.biography.slice(0, 300) + '...' : arr.biography 
    rate.innerHTML =  `Popularity: ${arr.popularity}`
    age.innerHTML = arr.birthday
    place.innerHTML = arr.place_of_birth
}