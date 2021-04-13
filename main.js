const hello = require('./hello.js');

function main(){

    /* Début du script ici */

    hello.slowLog(hello.intro,100,()=> {    
        process.stdin.resume(); //réactiver l'entrée
    });

}

main();

/*

    hello.slowLog(hello.intro,10,()=> {    
        hello.slowLog("on fait quoi ?\n",100, () => {
            process.stdin.resume(); //réactiver l'entrée
        } );
    });

*/