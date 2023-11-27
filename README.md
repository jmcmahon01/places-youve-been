## Tests
Describe: placeDetails();
Test: "Will add prototype method that returns object properties and concatenate them using punctuation"
code: testplace1.placeDetails(); 
Expected Output: 'Mt. Hood, Portland, Oregon! Landmarks: Timberline Lodge. Notes: The lodge was the film site for the movie The Shining'

Describe: addPlace();
Test: "Will add places as objects into the PlacesBeen constructor function"
Code: PlacesBeen.addPlace(place1);
Expected Output: 

Describe: assignId();
Test: "will assign each place a unique numbered ID, incrementing by 1"
Code: assignID(place1);
Expected Ouput: 1

Describe findPlace();
Test: "will enable user to retrieve a place stored in the PlacesBeen object"
code: findPlace(place1);
Expected Output: return place1
