export function shimiyay(arr, place){
    for(let item of arr){
        let main = document.createElement('div')
        let photo = document.createElement('div')
        let name = document.createElement('h5')
        let genre = document.createElement('h3')
        let rate = document.createElement('h3')
        let modal = document.createElement('div')
        let btn = document.createElement('button')
    
        main.classList.add('main-block')
        photo.classList.add('poster')
        genre.classList.add('rate')
        modal.classList.add('modalka')

        btn.innerHTML = 'Карточка фильма'
        name.innerHTML = item.title

        photo.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${item.poster_path})`

        modal.append(btn)
        photo.append(modal)
        main.append(photo, name)
        photo.append(rate)
        place.append(main)

        btn.onclick = () => {
            location.assign('./pages/movieCard/?id=' + item.id)
        }
    }
}