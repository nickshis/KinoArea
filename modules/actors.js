export function actors(arr, place){
    for(let item of arr){
        let main = document.createElement('div')
        let actor = document.createElement('h5')
        let age = document.createElement('h5')

        main.classList.add('actor-main')

        actor.innerHTML = item.name
        age.innerHTML = 'popularity:' + item.popularity

        actor.style.color = 'yellow'

        main.append(actor, age)
        place.append(main)

        main.onclick = () => {
            location.assign('/pages/actorInfo/?id=' + item.id)
        }
    }
}

export function actorMovie(arr, place){
    for(let item of arr){
        let main = document.createElement('div')
        let img = document.createElement('img')
        let text = document.createElement('div')
        let h3 = document.createElement('h3')
        let hh3 = document.createElement('h3')
    
        main.classList.add('main_actorMovie')
        text.classList.add('text_actorMovie')

        img.src = `https://image.tmdb.org/t/p/original/${item.profile_path}`

        hh3.style.color = 'yellow'

        h3.innerHTML = item.name
        hh3.innerHTML = item.character

        main.append(img, text)
        text.append(h3, hh3)
        place.append(main)

        main.onclick = () => {
            location.assign('/pages/actorInfo/?id=' + item.id)
        }
    }    
}