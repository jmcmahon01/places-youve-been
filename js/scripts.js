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
      return this.places [id];
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
