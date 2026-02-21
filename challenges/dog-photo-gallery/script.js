const fetchButton = document.getElementById("fetch-button")
const ul = document.querySelector("ul")

async function fetchPhoto() {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    const result = await data.json()

    const li = document.createElement("li")
    li.className = "photo-li"
    const img = document.createElement("img")
    img.src = result.message
    img.className = "photo"

    li.append(img)
    ul.append(li)
}

fetchPhoto()

fetchButton.addEventListener("click", fetchPhoto)