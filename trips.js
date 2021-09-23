const url = "";

const trips = document.querySelector(".div2")

async function getTrips() {
    const trips = await fetch(url);
    const getTrip = await trips.json();
    const tripImg = document.createElement("img")
    const explanation = document.createElement("p")
    tripImg.src = getTrip.url
    tripImg.style.height = "300px"
    tripImg.style.width = "300px"
    
trips.append(tripImg, explanation)
}

getTrips();