//Business Logic for Places I've Been
function PlacesBeen() {
  this.places = {};
  this.currentId = 0;
}
PlacesBeen.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}
PlacesBeen.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
PlacesBeen.prototype.findPlace = function (id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

//Business Logic for Places
function Place(placeName, placeLocation, placeLandmarks, placeNotes) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.placeLandmarks = placeLandmarks;
  this.placeNotes = placeNotes;
}
Place.prototype.placeDetails = function () {
  return this.placeName + ", " + this.placeLocation + "! " + "Landmarks: " + this.placeLandmarks + ". " + "Notes: " + this.placeNotes;
}

// User Interface Logic ---------
let placesBeen = new PlacesBeen();

function listPlaces(placesToDisplay) {
  let listPlacesDiv = document.querySelector("div#list-places");
  listPlacesDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(placesToDisplay.places).forEach(function (key) {
    const place = placesToDisplay.findPlace(key);
    const li = document.createElement("li");
    li.append(place.placeDetails());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  listPlacesDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedName = document.querySelector("input#new-place-name").value;
  const inputtedLocation = document.querySelector("input#new-place-location").value;
  const inputtedLandmark = document.querySelector("input#landmarks").value;
  const inputtedNotes = document.querySelector("input#notes").value;
  let newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmark, inputtedNotes);
  placesBeen.addPlace(newPlace);
  listPlaces(placesBeen);
}

window.addEventListener("load", function () {
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});


