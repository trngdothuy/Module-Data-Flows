async function fetchData() {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d79534d83bab813bb42219e82a1dffda')
    const result = await data.json()
    const description = await result.weather[0].description
    console.log(result.weather[0].description)
    return result
}

fetchData()