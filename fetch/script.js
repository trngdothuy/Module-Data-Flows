let cardDiv = document.getElementById("card")
let dataLoadingText = document.getElementById("data-loading")

async function fetchData() {
    try {
        const response = await fetch("https://xkcd.now.sh/?comic=latest")
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        console.log(result)
        return await result
    } catch (err) {
        console.error(error.message)
    }
}

async function makeCard() {
fetchData()
    .then(data => {
        dataLoadingText.style = "display: none"

        let img = document.createElement("img")
        let title = document.createElement("p")
        let description = document.createElement("p")
        img.src = data.img
        title.innerHTML = `<b><i>${data.title}</i></b>`
        description.innerHTML = `<i>${data.alt}</i>`

        cardDiv.append(title, img, description)
})
}

makeCard()