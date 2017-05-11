"use strict";

let inventory = [];
let bakery = {};


bakery.getInventory = () => {
	return inventory;
};

bakery.loadInventory = () => {
	return new Promise( function(resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);
			inventory = data;
			resolve(data); // No longer responsible for calling populatePage function
		});
	});
};

module.exports = bakery;
