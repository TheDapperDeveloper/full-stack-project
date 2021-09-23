const url = "";

const trips = document.querySelector(".div2")

async function getTrips() {
    const trips = await fetch(url);
    const getTrip = await fetchImage.json();
    const createDiv = document.createElement("div")
    const tripImg = document.createElement("img")
    const explanation = document.createElement("p")
    getTripImg.src = getTrip.url
    getTripImg.style.height = "200px"
    getTripImg.style.width = "200px"
    createDiv.innerHTML = tripImg.url
    
trips.append(tripImg, explanation)
}
getTrips();