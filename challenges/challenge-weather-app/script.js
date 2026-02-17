const figure = document.querySelector('figure')
console.log("figure", figure)
const conditions = document.getElementById('conditions')
console.log("conditions", conditions)
let description = ""

async function fetchData() {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d79534d83bab813bb42219e82a1dffda')
    const result = await data.json()
    return result
}

async function updateDescription() {
    const data = await fetchData()
    description = data.weather[0].description
    console.log("description", description)
    conditions.innerText = description
    return description
}

async function fetchPhoto() {
    const photoKeyword = await updateDescription()
    console.log("photoKeyword", photoKeyword)
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${photoKeyword}&client_id=5a35_J1WFoto88w1SxZ3rDkK8fZ-6RWFfn4_gPs5juI`)
    const unsplashData = await response.json()
    console.log("photos", unsplashData.results[0].urls)
    const photos = await unsplashData.results[0].urls  
    let img = document.createElement('img')
    img.src = photos["raw"]
    console.log("img", img)
    figure.append(img)
}

fetchPhoto()

