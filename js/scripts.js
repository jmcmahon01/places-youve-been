//Business Logic for Places I've Been
function PlacesBeen() {
  this.places = {};
}
PlacesBeen.prototype.addPlace = function (place) {
  this.places[place.placeName] = place;
}

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
