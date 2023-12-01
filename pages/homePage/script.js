import { user_auth } from '/modules/userData'
import { postData, getData } from '/modules/fetch'
import { userFlipFlap } from '/modules/functions'

let loginBtn = document.querySelector('.sigin')
let placcik = document.querySelector('.rightheader')
let neag = document.querySelector('.neag')
let imgs = document.querySelectorAll('.img')
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


imgs.forEach(img => {
    img.onclick = () => {
        imgs.forEach(el => el.classList.remove('imgActiveted'))
        img.classList.add('imgActiveted')
    }
})