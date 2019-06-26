var destinations = ["Tour the Locks", "Hike the Burke Gilman Trail", "Try Teriyaki","Take a trip on the ferry","Visit SAM","Attend KWK camp!","Ride the South Lake Union Trolley"];


var paragraph = $('p');
var button = $('button');

button.on('click',pickDestination);
  function pickDestination() {
    var random = Math.random() * destinations.length;
    var rounded = Math.floor(random);
    var yourDestination = destinations[rounded];
    paragraph.text(`${yourDestination}`);

  }
