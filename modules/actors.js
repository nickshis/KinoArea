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