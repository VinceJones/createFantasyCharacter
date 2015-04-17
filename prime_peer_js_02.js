
//Code goes here

//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var people = [];
var i;

function Person(health, mana, attack, armor){
	this.health = health;
	this.mana = mana;
	this.attack = attack;
	this.armor = armor;

	this.healthCheck = function(){
		this.health > 45 ? this.armor -= 5 : this.armor += 5;
	};	
	this.manaCheck = function(){
		this.mana > 27 ? this.health -= 5 : this.health += 5;
	};
	this.attackCheck = function(){
		this.attack < 15 ? this.mana += 5 : this.mana -= 5;
	};
	this.armorCheck = function(){
		this.armor < 18 ? this.attack += 5 : this.attack -= 5;
	};
}

function makePeople(x) {
	for ( i = 0; i < x; i++){
		people.push( new Person(randomNumber(30, 50), randomNumber(20,30), randomNumber(10, 20), randomNumber(15, 25)));		
	}
	for ( i = 0; i < people.length; i++){
		people[i].healthCheck();
		people[i].manaCheck();
		people[i].attackCheck();
		people[i].armorCheck();
		console.log("Health: " + people[i].health + ", Mana: " + people[i].mana + ", Attack: " + people[i].attack + ", Armor: " + people[i].armor);
		var x = document.getElementById("characters");
			x.innerHTML += "Health: " + people[i].health+"<br>Mana: " + people[i].mana + "<br>Attack: " + people[i].attack + "<br>Armor: " + people[i].armor+"<br><br>";
	}
}
makePeople(20);


