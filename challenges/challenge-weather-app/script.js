const figure = document.querySelector('figure')
const conditions = document.getElementById('conditions')
let description = ""
const thumbs = document.getElementById('thumbs')
const creditUser = document.getElementById("credit-user")

async function fetchData() {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d79534d83bab813bb42219e82a1dffda')
    const result = await data.json()
    return result
}

async function updateDescription() {
    const data = await fetchData()
    description = data.weather[0].description
    conditions.innerText = description
    return description
}

async function uploadBigPhoto(data) {
    console.log("uploadBigPhoto data", data)
    let img = document.createElement('img')
    img.src = data.urls.regular
    img.alt = data.alt_description
    img.id = "big-photo"
    console.log("big-photo", img)
    console.log("figure", figure)
    figure.innerHTML = ""
    figure.append(img)

    creditUser.innerText = data.user.name
    creditUser.href = data.user.portfolio_url
}

async function makeThumbnails(data) {
    let thumbnails = []
    for (let i = 0; i < data.length; i++) {
        const thumb = document.createElement("img")
        thumb.src = data[i].urls.thumb
        thumb.alt = data[i].alt_description
        thumb.style = "width:50px"
        thumb.className = "thumb"
        thumb.id = i
        thumbnails.push(thumb)
    }
    console.log("thumbnails", thumbnails)
    thumbs.append(...thumbnails)

    const clickableThumbnails = document.querySelectorAll(".thumb")

    clickableThumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            console.log("photosDataUsed[thumb.id]", data[thumb.id])
            thumb.style = "outline: 1px solid white;"
            uploadBigPhoto(data[thumb.id])
        })
    })
}

async function fetchPhoto() {
    // fetch data from unsplash
    const photoKeyword = await updateDescription()
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${photoKeyword}&client_id=5a35_J1WFoto88w1SxZ3rDkK8fZ-6RWFfn4_gPs5juI`)
    const unsplashData = await response.json()
    console.log("photosDataReceived", unsplashData.results)
    const photosDataReceived = await unsplashData.results
    // make a copy of the result to use later
    const photosDataUsed = [...photosDataReceived]
    console.log("photosDataUsed", photosDataUsed)

    // extract the main photo and show it
    let bigPhoto = photosDataUsed[0]
    console.log("bigPhoto", bigPhoto)
    uploadBigPhoto(bigPhoto)

    // make thumbnails
    makeThumbnails(photosDataUsed)
}

fetchPhoto()

