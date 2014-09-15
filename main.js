var numVictims = prompt("Welcome!  Please enter the number of victims of your disaster.");

var victimName = null;
var vicPhone = null;
var vicStreet = null;
var victims = [];
var vicPhones = [];
var vicAddy = [];

for(var i = 1; i <= numVictims; i++) {
	victimName = prompt("Please enter the Victim's name.");
	vicPhone = prompt("Please enter the Victim's phone number:");
	vicStreet = prompt("Please enter the street the victim lives on:");
	victims.push(victimName);
	vicPhones.push(vicPhone);
	vicAddy.push(vicStreet);
}

var numVolunteers = prompt("Ok great! Please enter the number of volunteers to help with your disaster.  You better have a lot if it's Godzilla related.");

var volName = null;
var volPhone = null;
var volStreet = null;
var volunteers = [];
var volPhones = [];
var volAddy = [];

for(var i = 1; i <= numVolunteers; i++) {
	volName = prompt("Please enter the volunteer's name.");
	volPhone = prompt("Please enter the volunteer's phone number:");
	volStreet = prompt("Please enter the street the volunteer lives on:");
	volunteers.push(volName);
	volPhones.push(volPhone);
	volAddy.push(volStreet);
}

var victimsAsString = victims.join(' ');
var volunteersAsString = volunteers.join(' ');

alert("There are " + numVictims + " people in need. " +"\n" + "You have " + numVolunteers + " volunteers to help them.  The victims are " 
	+ victimsAsString + ", and the volunteers you have are " + volunteersAsString + ".  Good luck!")