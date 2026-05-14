const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//Snack 1

const longBooks = books.filter(b => b.pages > 300)
const longBooksTitles = longBooks.map(l => l.title)
console.log(longBooksTitles)

//Snack 2

const availableBooks = books.filter(b => b.available)
const discountedBooks = availableBooks.map(a => {
    let prezzo = parseInt(a.price) * 0.8
    let prezzoScontato = `${prezzo.toFixed(2)}€`
    return prezzoScontato
})
const fullPricedBook = discountedBooks.find(d => {
    let prezzoPieno = parseFloat(d)
    return Number.isInteger(parseFloat(prezzoPieno))
})
console.log(fullPricedBook)

//Snack 3

const authors = books.map(b => b.author)
const areAuthorsAdults = authors.every(a => a.age > 17)
authors.sort((a, b) => b.age - a.age)
console.log(authors)
console.log(areAuthorsAdults)

//Snack 4

const ages = authors.map(a => a.age)
const agesSum = ages.reduce((acc, curr) => acc + curr, 0)
const etàMedia = agesSum / authors.length
console.log(ages)
console.log(`La media delle età è ${etàMedia}`)


//Snack 5

async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getBooks(ids) {

    try {
        const bookApi = ids.map(id => fetchJson(`http://localhost:3333/books/${id}`))
        const booksList = await Promise.all(bookApi)
        return console.log(booksList)
    } catch (error) {
        throw new Error(error.message)
    }
}

getBooks([2, 13, 7, 21, 19])

// Snack 6

const areThereAvailableBooks = books.some(b => b.available)
console.log(`Ci sono libri diponibili: ${areThereAvailableBooks}`)

const booksByPrice = books.sort((a, b) => {
    if (a.available === b.available) {
        return parseInt(b.price) - parseInt(a.price)
    }
    return b.available - a.available
})
console.log(booksByPrice)

// Snack 7

const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach(tag => {
        if (acc[tag]) {
            acc[tag]++
        } else {
            acc[tag] = 1
        }
    })
    return acc
}, {})

console.log(tagCounts)