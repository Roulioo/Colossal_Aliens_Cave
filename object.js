// Literary object 

let banana = {
    name : "banana",
    weight : 1,
    price : 10,
    effect : function(){
        console.log("Miam Miam banana");
        console.log("Strength :",strength ++);
        throw_object(banana);
    }
};

let tested = 0;

let merguez = {
    name : "merguez",
    weight : 10,
    price : 30
};

let coca = {
    name : "coca",
    weight : 5, 
    price : 20
};

let pot_banana = {
    name : "pot_banana",
    weight : 2,
    price : 0
}

let sword = {
    name : "sword",
    weight : 2,
    attack : 30
}

exports.sword = sword;
exports.tested = tested;