const quoteContent = document.querySelector("#quoteContent");
const authorName = document.querySelector("#authorName");
const newQuoteBtn = document.querySelector("#newQuoteBtn");
const tweetBtn = document.querySelector("#tweetBtn");

async function getQuote() {
    quoteContent.innerHTML = "Loading..."
    authorName.innerHTML = "Loading..."
    try {
        const response = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
            headers: {
                "X-Api-Key": "YpxdAfboOojBKsSFPMnUWGfYPiBbpGWwJYzTNrWC"
            }
        });

        if (!response.ok) {
            throw new Error("API error: " + response.status);
        }

        const data = await response.json();

        // UI update
        quoteContent.innerText = data[0].quote;
        authorName.innerText = data[0].author;

    } catch (error) {
        console.error("Error:", error);
        quoteContent.innerText = "Failed to load quote";
        authorName.innerText = "";
    }
}

getQuote()

function tweetQuote() {

    const quote = quoteContent.innerText;
    const author = authorName.innerText;

    if (quote === "Loading..." || !quote) return alert("No quote available");

    const tweetText = `${quote} — ${author}`;

    const tweetUrl = `https://x.com/intent/post?text=${encodeURIComponent(tweetText)}`;

    window.open(tweetUrl, "_blank");
}

newQuoteBtn.addEventListener("click", getQuote)

tweetBtn.addEventListener("click", tweetQuote)