const mainDiv = document.querySelector(".maindiv")

async function getItinerary() {
    const url = "http://localhost:3000/view_itinerary/:userID"
    const itinerary = await fetch(url, {
        method:"POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await itinerary.json();

    for (const trip of json) {
      const tripTitle = trip.title;
      const displayTrip = document.createElement("h2")
      displayTrip.innerHTML = tripTitle
      console.log(tripTitle)

      const tripLocation= trip.location;
      const displayLocation = document.createElement("h3")
      displayLocation.innerHTML= tripLocation

      const tripArrDate = trip.arrDate
      const displayArrDate = document.createElement("h3")
      displayArrDate.innerHTML = tripArrDate

      const tripDepDate = trip.depDate
      const displayDepDate = document.createElement("h3")
      displayDepDate.innerHTML = tripDepDate

      const button = document.createElement("button")
      button.innerHTML = "Delete"
      
      const trips = document.createElement("div")

      trips.append(displayTrip, displayLocation, displayArrDate, displayDepDate, button)
      mainDiv.append(trips)
    }
    
}

getItinerary()