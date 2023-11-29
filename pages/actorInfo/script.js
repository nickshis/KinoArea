import { getData } from '/modules/fetch'
import { shimiyay, photos } from '/modules/functions'
import { genres } from '/modules/db'

let id = location.search.split('=').at(-1)
let pyt = document.querySelector('.pyt')
let poster = document.querySelector('.left')
let title = document.querySelector('.title')
let descr = document.querySelector('.descr')
let orig = document.querySelector('.orig_title')
let rate = document.querySelector('.rate')
let age = document.querySelector('.age')
let place = document.querySelector('.place')
let placik = document.querySelector('.actorFilms')
let placik2 = document.querySelector('.photos')

getData(`person/${id}?language=ru`)
.then(res => {
    pyt.innerHTML = `Main > Actors > ${res.name}`
    poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.profile_path})`
    orig.innerHTML = res.name
    title.innerHTML = res.name
    descr.innerHTML = res.biography.length > 300 ? res.biography.slice(0, 300) + '...' : res.biography 
    rate.innerHTML =  `Popularity: ${res.popularity}`
    age.innerHTML = res.birthday
    place.innerHTML = res.place_of_birth
})

getData(`person/${id}/combined_credits`)
.then(res => shimiyay(res.cast.slice(0, 4), placik, genres))

getData(`person/${id}/images`)
.then(res => photos(res.profiles.slice(0, 8), placik2))

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'Рейтинг',
        data: [10, 9, 8, 7.5, 7, 8, 7.5, 7, 6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});