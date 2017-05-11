"use strict";

console.log("Main.js");


let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../templates/cakegrid.hbs'),
	eventStuff = require("./events.js"),
	welcomeTemplate = require("../templates/welcome.hbs"),
	welcomeData = require("../templates/welcome-data.js");

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

$("#welcome").append(welcomeTemplate(welcomeData));

function populatePage(stuff){
		// make a div to hold the rendered html
		let newDiv = document.createElement("div");
		newDiv.innerHTML = cakeTemplate(stuff);
		$("#cake-cards").append(newDiv);
		eventStuff();
}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadInventoryResolve) =>{
		console.log("cake promise", inventoryFromLoadInventoryResolve);
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reason) => {
		console.log("Error");
	});