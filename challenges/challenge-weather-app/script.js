async function fetchData() {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d79534d83bab813bb42219e82a1dffda')
    const result = await data.json()
    return result
}

const figure = document.querySelector('figure')
console.log("figure", figure)

async function fetchPhoto() {
    const data = await fetchData()
    const description = data.weather[0].description.split(" ").join("-")
    console.log("description", description)
    const response = await fetch('https://api.unsplash.com/search/photos?query=snow&client_id=5a35_J1WFoto88w1SxZ3rDkK8fZ-6RWFfn4_gPs5juI')
    const unsplashData = await response.json()
    console.log("photos", unsplashData.results[0].urls)
    const photos = await unsplashData.results[0].urls  
    let img = document.createElement('img')
    img.src = photos["raw"]
    console.log("img", img)
    figure.append(img)
}

fetchPhoto()

