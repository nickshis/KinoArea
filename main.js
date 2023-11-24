import { shimiyay } from './modules/films'
import { actors } from './modules/actors'

let kakash = ''
let base_url = 'https://api.themoviedb.org/3/'
let place = document.querySelector('.new_films')
let btn_search = document.querySelector('.search')
let neag = document.querySelector('.neag')
let modalSearch = document.querySelector('.modalSearch')
let del = document.querySelector('.delete')
let place5 = document.querySelector('.trailers_div')
let place6 = document.querySelector('.popular_films')
let place7 = document.querySelector('.upcoming')

fetch(base_url + 'movie/now_playing?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => {
    shimiyay(res.results.slice(0, 8), place)
    ies(res.results.slice(0, 4), place5)
})

fetch(base_url + 'movie/popular?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => shimiyay(res.results.slice(0, 4), place6))

fetch(base_url + 'movie/upcoming?language=ru', {
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
    }
})
.then(res => res.json())
.then(res => shimiyay(res.results.slice(0, 4), place7))


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

let form = document.forms.search
let inp = document.querySelector('.inputModal')
let place4 = document.querySelector('.cointainer')

form.onsubmit = (e) => {
    e.preventDefault()

    fetch(base_url + 'search/movie?query=' + inp.value, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
        },
    })
    .then(res => res.json())
    .then(res => modal(res.results, place4))
}

btn_search.onclick = () => {
    modalSearch.style.display = 'flex'
    neag.style.display = 'block'
    neag.onclick = () => {
        modalSearch.style.display = 'none'
        neag.style.display = 'none'
    }
    del.onclick = () => {
        modalSearch.style.display = 'none'
        neag.style.display = 'none'
    }
}

function modal(arr, place){
    place.innerHTML = ''
    for(let item of arr){
        if(arr){
            console.log(arr);
            let main = document.createElement('div')
            let photo = document.createElement('img')
            let texts = document.createElement('div')
            let title = document.createElement('h3')
            let orig = document.createElement('h4')
            let genres = document.createElement('h5')
    
            main.classList.add('modal-main')
            photo.classList.add('photo-modal')
            texts.classList.add('texts-modal')
    
            title.innerHTML = item.title
            orig.innerHTML = item.original_title
            genres.innerHTML = 'Fight, Drama, Comedy'
    
            photo.src = `https://image.tmdb.org/t/p/w300/${item.poster_path}`
    
            main.append(photo, texts)
            texts.append(title, orig, genres)   
            place.append(main)
        } else {
            alert('Ничего не нашлось')
        }
    }
}

let iframe = document.querySelector('.iframe')
let cooler = document.querySelector('.trailer_title')

function ies(arr, place){
    for(let item of arr){
        let trail = document.createElement('div')
        let play = document.createElement('div')

        trail.classList.add('trail')
        play.classList.add('player')

        trail.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${item.backdrop_path})`

        trail.append(play)
        place.append(trail)
        
        trail.onclick = () => {
            fetch(base_url + `movie/${item.id}/videos`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
                }
            }).then(res => res.json())
            .then(res => {
                iframe.src = `https://www.youtube.com/embed/${res.results[4].key}`
                cooler.innerHTML = res.results[4].name
            })
        }
    }
}