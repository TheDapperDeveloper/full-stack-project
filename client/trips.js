const url = "";

const trips = document.querySelector(".div2")

async function getTrips() {
    const trips = await fetch(url);
    const getTrip = await trips.json();
    const tripImg = document.createElement("img")
    const explanation = document.createElement("p")
    getTripImg.src = getTrip.url
    getTripImg.style.height = "300px"
    getTripImg.style.width = "300px"
    createDiv.innerHTML = tripImg.url
    
trips.append(tripImg, explanation)
}

getTrips();