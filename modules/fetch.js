let base_url = 'https://api.themoviedb.org/3/'

export const getData = async (url) => {
    let res = fetch(base_url + url, {
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGMzMDE5ZGMzYzFkNjE2NThiMTZkZjhmMzdiNWRjZiIsInN1YiI6IjY1NTc0ZDc0YjU0MDAyMTRkODJjNTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eeiG0E6O9LFWt0r0wQtQAbShQVv0vvza_4I1XvcgwVE'
        }
    }).then(res => res.json())
    return res
}