let data = [
    { id: 1, title: 'Top Gun: Maverik', year: '2022' },
    { id: 2, title: 'Top Gun', year: '1986'},
    { id: 3, title: 'Joker', year: '2019' },
    { id: 4, title: 'Demon Slayer - Mugen Train', year: '2020' },
    { id: 5, title: 'The Room ', year: '2010' },
    { id: 6, title: 'Deadpool', year: '2016' },
    { id: 7, title: 'Inception', year: '2010' }
]

function getNextId() {
    return Math.max(...data.map((movie) => movie.id)) + 1
}

function insert(movie) {
    movie.id = getNextId()
    data.push(movie)
}

function update(movie) {
    const index = data.findIndex(item => {
        return item.id == movie.id
    })
    data[index].title = movie.title
    data[index].year = movie.year
}

export function getAll() {
    return Promise.resolve(data)
}

export function get(id) {
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            return Promise.resolve(data[i])
        }
    }
}

export function remove(id) {
    const index = data.findIndex(item => {
        return item.id == id
    })
    data.splice(index, 1)
}

export function save(movie) {
    if (movie.id === '') {
        insert(movie)
    } else {
        console.log("Test", movie)
        update(movie)
    }
    return Promise.resolve()
}