// var numVictims = prompt("Welcome!  Please enter the number of victims of your disaster.");

// var victimName = null;
// var vicPhone = null;
// var vicStreet = null;
// var victims = [];
// var vicPhones = [];
// var vicAddy = [];

// for(var i = 1; i <= numVictims; i++) {
// 	victimName = prompt("Please enter the Victim's name.");
// 	vicPhone = prompt("Please enter the Victim's phone number:");
// 	vicStreet = prompt("Please enter the street the victim lives on:");
// 	victims.push(victimName);
// 	vicPhones.push(vicPhone);
// 	vicAddy.push(vicStreet);
// }

// var numVolunteers = prompt("Ok great! Please enter the number of volunteers to help with your disaster.  You better have a lot if it's Godzilla related.");

// var volName = null;
// var volPhone = null;
// var volStreet = null;
// var volunteers = [];
// var volPhones = [];
// var volAddy = [];

// for(var i = 1; i <= numVolunteers; i++) {
// 	volName = prompt("Please enter the volunteer's name.");
// 	volPhone = prompt("Please enter the volunteer's phone number:");
// 	volStreet = prompt("Please enter the street the volunteer lives on:");
// 	volunteers.push(volName);
// 	volPhones.push(volPhone);
// 	volAddy.push(volStreet);
// }

// var victimsAsString = victims.join(' ');
// var volunteersAsString = volunteers.join(' ');

// alert("There are " + numVictims + " people in need. " +"\n" + "You have " + numVolunteers + " volunteers to help them.  The victims are " 
// 	+ victimsAsString + ", and the volunteers you have are " + volunteersAsString + ".  Good luck!")


var person = function person(nm, ph, st, tp) {
	this.vName = nm;
	this.vPhone = ph;
	this.vStreet = st;
	this.vStatus = tp;
};

var victims = [];
var volunteers = [];
var continueYes = true;

while (continueYes === true) {
	var name = prompt("Please enter the person's name, whether victim or volunteer.");
	var phone = prompt("Please enter the person's telephone number.");
	var street = prompt("Please enter the person's street.");
	var personType = prompt("Please enter '1' if the person was a victim of a disaster, or '2' if the person is a volunteer.");
	
	var thisPerson = new person (name, phone, street, personType);

	if 	(personType === "1") {
		victims.push(thisPerson);
	}
	else {
		volunteers.push(thisPerson);
	};

	var cont = prompt("Would you like to add another person? Y/N.");
	if (cont === 'N') {
		continueYes = false;
	};
};

var victimstring = victims[0].vName + "\n";
var volunteerstring = volunteers[0].vName + "\n";

for (var i = 1; i<= (victims.length - 1); i++) {
	victimstring = victimstring + victims[i].vName + "\n";
};

for (var j = 1; j<= (volunteers.length - 1); j++) {
	volunteerstring = volunteerstring + volunteers[j].vName + "\n";
};

alert("There are " + victims.length + " people in need. " +"\n" + "You have " + volunteers.length + 
	" volunteers to help them.  \nThe victims are:\n " 
	+ victimstring + "And the volunteers you have are: \n" + volunteerstring + "Good luck!");


// var lookForHelp = prompt("Would you like to find help for a specific victim? Y/N");

// if (lookForHelp === 'Y') {
// 	var helpWho = prompt("Please enter the exact name of the person you would like to find help for.")
	

// }



















