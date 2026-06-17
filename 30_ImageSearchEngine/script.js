const searchForm = document.querySelector('#search-form')
const searchBox = document.querySelector('#search-box')
const searchResult = document.querySelector('#search-result')
const showMoreBtn = document.querySelector('#show-more-btn')

const accessKey = "Add your acessKey"

let keyword = ""
let page = 1

async function searchImage() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API Failed");
        }

        const data = await response.json();

        if (page === 1) {
            searchResult.innerHTML = ""
        }

        const results = data.results

        if (results.length === 0) {

            let h2 = document.createElement('h2')
            h2.classList = "not-found"
            h2.innerHTML = `No image found for ${keyword}`

            searchResult.appendChild(h2)

            showMoreBtn.style.display = "none"

            return
        }

        results.forEach((result) => {

            const image = document.createElement("img")
            image.src = result.urls.small

            const imageLink = document.createElement("a")

            imageLink.href = result.links.html
            imageLink.target = "_blank"

            imageLink.appendChild(image)

            searchResult.appendChild(imageLink)

        })

        showMoreBtn.style.display = "block"

    } catch (error) {

        console.log(error);

    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    page = 1
    searchImage()
})

showMoreBtn.addEventListener('click', () => {
    page++

    searchImage()
})