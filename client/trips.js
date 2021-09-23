// const e = require("cors");

// const url = "";


const submitbutton = document.querySelector(".submitbutton")
const tripsDiv = document.querySelector(".tripsdiv")
const selectform = document.querySelector("option").value
console.log(selectform)
// const selectform = "East"

const getTrips = async () => {
if ( selectform == "East") {
const getTripsEast = async () => {
    const easturl = "http://localhost:3000/view_trips_east";
    const tripData = await fetch (easturl, {
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
      console.log(tripTitle)

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
  
}
getTripsEast()
} else if ( selectform == "West") {
        const getTripsWest= async () => {
        const westurl = "http://localhost:3000/view_trips_west";
        const tripData = await fetch (westurl, {
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
          console.log(tripTitle)
    
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
    } 
    getTripsWest();  
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
    console.log("button clicked")
    getTrips();
  });

 