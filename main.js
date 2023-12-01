import {
    shimiyay,
    ies,
    modal,
    userFlipFlap
} from './modules/functions'
import {
    user_auth
} from '/modules/userData'
import {
    actors
} from '/modules/actors'
import {
    genres
} from '/modules/db'
import {
    getData,
    postData
} from '/modules/fetch'

let placcik = document.querySelector('.rightheader')
let place = document.querySelector('.new_films')
let btn_search = document.querySelector('.search')
let neag = document.querySelector('.neag')
let modalSearch = document.querySelector('.modalSearch')
let del = document.querySelector('.delete')
let place5 = document.querySelector('.trailers_div')
let place6 = document.querySelector('.popular_films')
let place7 = document.querySelector('.upcoming')
let iframe = document.querySelector('.iframe')
let cooler = document.querySelector('.trailer_title')
let place2 = document.querySelector('.scroll')
let posterActor = document.querySelector('.first')
let posterActor2 = document.querySelector('.second')
let actor = document.querySelector('.first .down .actor-title')
let actorRate = document.querySelector('.first .down .actor-rate')
let actor2 = document.querySelector('.second .down .actor-title')
let actorRate2 = document.querySelector('.second .down .actor-rate')
let form = document.forms.search
let inp = document.querySelector('.inputModal')
let place4 = document.querySelector('.cointainer')

 

getData('movie/now_playing?language=ru')
    .then(res => {
        shimiyay(res.results.slice(0, 8), place, genres)
        ies(res.results.slice(0, 4), place5, iframe, cooler)
    })

getData('movie/popular?language=ru')
    .then(res => shimiyay(res.results.slice(0, 4), place6, genres))

getData('movie/upcoming?language=ru')
    .then(res => shimiyay(res.results.slice(0, 4), place7, genres))




getData('person/popular?language=ru')
    .then(res => {
        actors(res.results.slice(2), place2)
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


form.onsubmit = (e) => {
    e.preventDefault()

    getData(`search/movie?query=${inp.value}`)
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


let loginBtn = document.querySelector('.sigin')
let reqToken = ''

loginBtn.onclick = () => {
    fetch('https://api.themoviedb.org/4/auth/request_token', {
        method: 'POST',
        dataType: 'json',
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE`,
            'Content-Type': "application/json"
        },
        start_time: new Date().getTime()
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            reqToken = res.request_token
            window.open(`https://www.themoviedb.org/auth/access?request_token=${res.request_token}`)
        }
    })
        loginBtn.onclick = () => {
            postData('auth/access_token', reqToken)
                .then(res => {
                    if (res.success) {
                        localStorage.setItem('user_auth', JSON.stringify(res))
                        location.reload()
                    }
                })
        }
}

if(user_auth){
    getData(`account/${user_auth?.account_id}`, {
        headers: {
            'Content-Type': "application/json"
        },
    })
    .then(res => {
        userFlipFlap(res, placcik, neag)
    })
} 

