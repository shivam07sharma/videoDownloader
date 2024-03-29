
async function getpost(limk) {
    const url = 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'dee54dacf5msh86d25b8a02efa83p142929jsn5cdc83ca8500',
            'X-RapidAPI-Host': 'social-download-all-in-one.p.rapidapi.com'
        },
        body: JSON.stringify({
            url: limk
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector(".titl").innerHTML="Invalid URL";
        return null;
    }
}

const btn = document.getElementById("downlink");
btn.addEventListener("click", async () => {
    document.querySelector("#downlink").style.display = "none";
    const link = document.getElementById("posturl").value;
    console.log(link);
    const result = await getpost(link);
    if (result) {
        next(result);
    }
});

function next(result) {
    document.querySelector("#content").style.display = "flex";
    document.querySelector(".video").innerHTML = `<video controls autoplay id="final" src="${result.medias[0].url}">Video</video>`;

}
