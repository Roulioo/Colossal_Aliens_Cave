const face_de = require('./face_de.js');
const object = require('./object.js');
const monster = require('./monster.js');
const go = require('./go.js');

/* Fonction inventaire */ 

/*

- Lister inventaire
- Ramasser objet 'suivres les régles du poids'
- Jeter un objet 'vérifier si on l'a pas déjà'
- Utiliser un objet qu'on a dans l'inventaire 'message -> Vous utilisez l'arme ...'
- Équiper l'objet 'armure porter ou armure dans le sac' 
- Déséquiper l'ojet 

*/

// Function that creates an object and returns it


function create_Object(name, weight, price) {

    let o = {}

    o.name = name;
    o.poids = weight;
    o.price = price;
    o.id = id ; // increase the sword every turn

}

// Strength of player 

let strength = 10;

// Object that you have in inventory 

let inventory = [];

inventory.weight = 0

// Object that we have in equipment

let equipment = [];

equipment.weight = 0;

function listed_inventory(){
    if(inventory.length == 0 ){
        console.log("You have nothing in your inventory");
    }else{
        for(let i = 0; i < inventory.length; i++){
            console.log("You have " + inventory[i] + " in your inventory");
        }
    }     
}

function listed_equipment(){
    if(equipment.length == 0 ){
        console.log("You have nothing in your equipment");
    }else{
        for(let i = 0; i < equipment.length; i++){
            console.log("You have " + equipment[i] + " in your equipment");
        }
    }     
}

function pick_up_object(object) {

    let weight_Limit = strength * 7.5 ; // rules of donjon and dragon

    if((object.weight + inventory.weight) < weight_Limit){
        inventory.push(object.name);
        inventory.weight += object.weight; // Maj Object 
        return object.name + " is add";
    }else{
        return "Excess weight, impossible";
    }

}

function throw_object(object) {
    if (inventory.indexOf(object) != -1 ){
        let t = inventory.splice(inventory.indexOf(object),1);
        return t + " has been delete";
    }else{
        return object + " has not remove";
    }
}

function use_object_inventory(object) {
    if((inventory.findIndex(x => x.name != object.name))){ // x ranges inventory
        return "You want use : " + object.name + " but you can't use this item because he doesn't exist";
    }else{
        object.effect();
        return "You use : " +object.name; 
    }
}

// (inventory.findIndex(x => x.name == object.name)) != undefined

function equip_object(object) {
    if(inventory.indexOf(object) != -1){ 
        equipment.push(object);
        return object + " is add in your equipment";
    }else{
        return "You want to add " + object + " in your equipment but you do not have in your inventory"; 
    }
}

function unequip_object(object) {
    if(equipment.indexOf(object) != -1){
        inventory.push(object);
        return object + " is remove in inventory";
    }else{
        return "You want to remove " + object + " in your inventory but you do not have in your equipment"; 
    }
}

function attack(nbfaces){

    de_attack = face_de.random(nbfaces);

    if((monster.alien1.life > 0) || (monster.alien2.life > 0)){
    
        if((go.map[go.joueur.y][go.joueur.x]) == "A1"){ 
            if((de_attack >= monster.alien1.armor) >= 0){
                monster.alien1.life -= object.sword.attack; 
                if(monster.alien1.life <= 0){
                    object.tested ++;
                    return "You succeed to kill " +monster.alien1.name;
                }
                return object.sword.name + " did lose " + object.sword.attack + " of life to the " + monster.alien1.name;
            }else {
                return "Attack impossible, the face of the dice is not superior to the armor of the opponent";
            }
        }

        if((go.map[go.joueur.y][go.joueur.x]) == "A2"){ 
            if((de_attack >= monster.alien2.armor) >= 0){
                monster.alien2.life -= object.sword.attack; 
                if(monster.alien2.life <= 0){
                    object.tested ++;
                    console.log(object.tested);
                    return "You succeed to kill " +monster.alien2.name;
                }
                return object.sword.name + " did lose " + object.sword.attack + " of life to the " + monster.alien2.name;
            }else {
                return "Attack impossible, the face of the dice is not superior to the armor of the opponent";
            }
        }

        if((monster.alien1.life <= 0) && (monster.alien2.life <= 0)){
            return "You have received a key for exit this labyrinth";
        }

    }  
    return "Alien 1 and Alien 2 are dead";
}


exports.attack = attack;