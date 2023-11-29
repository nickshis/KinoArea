import { getData } from '/modules/fetch'
import { mahoraga, photos } from '/modules/functions'
import { actorMovie } from '/modules/actors'

let id = location.search.split('=').at(-1)
let iframe = document.querySelector('.trail')
let actorDiv = document.querySelector('.actorsDivok')
let photoDiv = document.querySelector('.photos')

getData(`movie/${id}?language=ru`)
.then(res => mahoraga(res))

getData(`movie/${id}/videos`)
.then(res => {
    iframe.src = `https://www.youtube.com/embed/${res.results[4].key}`
})

getData(`movie/${id}/credits`)
.then(res => {
    actorMovie(res.cast.slice(0, 14), actorDiv)
})

getData(`movie/${id}/images`)
.then(res => {
    photos(res.backdrops.slice(0, 8), photoDiv)
})