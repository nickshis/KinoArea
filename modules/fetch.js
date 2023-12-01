let base_url = 'https://api.themoviedb.org/3/'
let post_url = 'https://api.themoviedb.org/4/'
let API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'

export const getData = async (url) => {
    let res = fetch(base_url + url, {
        headers:{
            Authorization: `Bearer ${API_KEY}`
        }
    }).then(res => res.json())
    return res
}

export const postData = async (url, reqToken) => {
    let res = fetch(post_url + url, {
        method: 'POST',
        dataType: 'json',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            request_token: reqToken
        }),
        start_time: new Date().getTime()
    }).then(res => res.json())
    return res
}