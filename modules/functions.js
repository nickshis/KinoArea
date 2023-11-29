import { getData } from "./fetch"

export function shimiyay(arr, place, genres){
    for(let item of arr){
        let main = document.createElement('div')
        let photo = document.createElement('div')
        let name = document.createElement('h3')
        let genre = document.createElement('h5')
        let rate = document.createElement('h3')
        let modal = document.createElement('div')
        let btn = document.createElement('button')
    
        main.classList.add('main-block')
        photo.classList.add('poster')
        modal.classList.add('modalka')

        btn.innerHTML = 'Карточка фильма'
        name.innerHTML = item.title
        genres.forEach(el => {
            item.genre_ids.forEach(elem => {
                if(el.id === elem){
                    genre.innerHTML += ` ${el.name}`
                }
            })
        });

        genre.style.color = 'yellow'

        photo.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${item.poster_path})`

        modal.append(btn)
        photo.append(modal)
        main.append(photo, name, genre)
        photo.append(rate)
        place.append(main)

        btn.onclick = () => {
            location.assign('/pages/movieCard/?id=' + item.id)
        }
    }
}

export function ies(arr, place, iframe, cooler){
    for(let item of arr){
        let trail = document.createElement('div')
        let play = document.createElement('div')

        trail.classList.add('trail')
        play.classList.add('player')

        trail.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${item.backdrop_path})`

        trail.append(play)
        place.append(trail)
        
        trail.onclick = () => {
            getData(`movie/${item.id}/videos`)
            .then(res => {
                console.log(res);
                iframe.src = `https://www.youtube.com/embed/${res.results[4].key}`
                cooler.innerHTML = res.results[4].name
            })
        }
    }
}

export function modal(arr, place){
    place.innerHTML = ''
    if(arr){
        for(let item of arr){
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

            main.onclick = () => {
                location.assign('/pages/movieCard/?id=' + item.id)
            }
        }
    } else {
        alert('Ничего не нашлось')
    }
}

let main = document.querySelector('.super')
let pyt = document.querySelector('.pyt')
let poster = document.querySelector('.left')
let title = document.querySelector('.title')
let descr = document.querySelector('.descr')
let orig = document.querySelector('.orig_title')
let cooler = document.querySelector('.title_trail')

export function mahoraga(item){
    main.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
    pyt.innerHTML = `Main > Films > ${item.title}`
    poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.poster_path})`
    title.innerHTML = item.title
    orig.innerHTML = item.original_title
    descr.innerHTML = item.overview 
    cooler.innerHTML = item.title
}

export function photos(arr, place){
    for(let item of arr){
        let img = document.createElement('img')
        
        img.classList.add('photos_img')

        img.src = `https://image.tmdb.org/t/p/original/${item.file_path}`
    
        place.append(img)
    }
}