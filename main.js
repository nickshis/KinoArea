import { shimiyay } from './modules/films'
import { actors } from './modules/actors'

let base_url = 'https://api.themoviedb.org/3/'
let place = document.querySelector('.new_films')

fetch(base_url + 'movie/now_playing?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => {
    shimiyay(res.results.slice(0, 8), place)
})

let place2 = document.querySelector('.scroll')
let posterActor = document.querySelector('.first')
let posterActor2 = document.querySelector('.second')
let actor = document.querySelector('.first .down .actor-title')
let actorRate = document.querySelector('.first .down .actor-rate')
let actor2 = document.querySelector('.second .down .actor-title')
let actorRate2 = document.querySelector('.second .down .actor-rate')


fetch(base_url + 'person/popular?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => {
    actors(res.results.slice(2), place2)
    console.log(res);
    actor.innerHTML = res.results[0].name
    actorRate.innerHTML = res.results[0].popularity
    posterActor.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${res.results[0].profile_path})`
    actor2.innerHTML = res.results[1].name
    actorRate2.innerHTML = res.results[1].popularity
    posterActor2.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${res.results[1].profile_path})`
    posterActor.onclick = () => {
        location.assign('/pages/actorInfo/?id=' + res.results[0].id)
    }
    posterActor2.onclick = () => {
        location.assign('/pages/actorInfo/?id=' + res.results[1].id)
    }
})