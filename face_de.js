// Fonction pour notre lancer de dé 

function random(nbFace) {

    nbAleatoire = Math.random(); // fournit un nombre aléatoire entre 0 et 1
    result = Math.ceil(nbFace*nbAleatoire); // dé à nb faces arrondi à l'entier supérieur

    return result;
}

exports.random = random;