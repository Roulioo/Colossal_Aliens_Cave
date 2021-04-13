let map = [
    ["_","A1","D"],
    ["A2","_","_"],
];

let joueur = {
    x : 0,
    y : 2  
}

let A1 = {
    x : 1,
    y : 0
}

let A2 = {
    x : 0,
    y : 1
}

let E = {
    x : 2,
    y : 3
}

//map[2][0] = "P";
//map[2][1] = "_";

function go(direction) {

    switch (direction){
        case "W":
            if(joueur.x > 0){
                joueur.x --;
                console.log("We go west");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "NW":
            if(joueur.x > 0 && joueur.y > 0){
                joueur.x --;
                joueur.y --;
                console.log("We go north west");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "N":
            if(joueur.y > 0){
                joueur.y --;
                console.log("We go north");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "NE":
            if(joueur.x < (map[joueur.y].length) && joueur.y > 0){
                joueur.y --;
                joueur.x ++;
                console.log("We go north east");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "E":
            if(joueur.x < (map[joueur.y].length)){
                joueur.x ++;
                console.log("We go east");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "SE":
            if((joueur.x < (map[joueur.y].length) && joueur.y < map.length -1)){
                joueur.x ++;
                joueur.y ++;
                console.log("We go south east");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "S":
            if(joueur.y < map.length -1){
                joueur.y ++;
                console.log("We go south");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        case "SW":
            if(joueur.x > 0 && joueur.y < map.length -1){
                joueur.y ++;
                joueur.x --;
                console.log("We go south west");
            }else{
                console.log("We can't go, it's forbidden");
            }
            break;
        default:
            console.log("ERROR \nEnter W / NW / N / NE / E / SE / S / SW");
            break;
    }

    switch (map[joueur.y][joueur.x]){
        case "_":
            console.log("It's a plain, continue your way");
            break;
        case "D":
            console.log("It's a exit");
            break;
        case "A1":
            console.log("It's a Alien 1");
            break;
        case "A2":
            console.log("It's a Alien 2");
            break;
        case "A3":
            console.log("It's a Alien 3");
            break;
        case "A4":
            console.log("It's a Alien 4");
            break;
        default: 
            console.log("It's empty, you can't go");
    }

}

exports.go = go;
exports.map = map;
exports.joueur = joueur;
