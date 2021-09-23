// const e = require("cors");

// const url = "";


const submitbutton = document.querySelector(".submitbutton")
const tripsDiv = document.querySelector(".tripsdiv")

const getTrips = async () => {
    const url = "http://localhost:3000/view_trips";
    const tripData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await tripData.json();
  for (const trip of json) {
      const tripTitle = trip.location;
      const displayTrip = document.createElement("h2")
      displayTrip.innerHTML = tripTitle

      const tripPhoto = trip.photo;
      const displayPhoto = document.createElement("img")
      displayPhoto.src = tripPhoto

      const tripDes = trip.description
      const displayDes = document.createElement("p")
      displayDes.innerHTML = tripDes

      const button = document.createElement("button")
      button.innerHTML = "Add to Itinerary"

      const trips = document.createElement("div")

      trips.append(displayTrip, displayPhoto, displayDes, button)
      tripsDiv.append(trips)
  }
};


// async function getTrips() {
//     const trips = await fetch("http://localhost:3000/view_trips");
//     const getTrip = await trips.json();
//     console.log(getTrip)
//     const tripImg = document.createElement("img")
//     const explanation = document.createElement("p")
//     tripImg.src = getTrip.url
//     tripImg.style.height = "300px"
//     tripImg.style.width = "300px"
//     createDiv.innerHTML = tripImg.url
    
// trips.append(tripImg, explanation)
// }

submitbutton.addEventListener("click", () => {
    getTrips();
  });

 