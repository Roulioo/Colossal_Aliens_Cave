const go = require('./go.js');
const attack = require('./inventaire.js');
const monster = require('./monster.js');
const object = require('./object.js');

// Function slowLog

function slowLog(texte,time,suite){

    let lettreCourante = 0;

    process.stdin.pause();// stopper l'entrée pour ne pas pirater le texte

    for(let i = 0; i < texte.length +1; i++){
        setTimeout(() =>{
            if(lettreCourante < texte.length){
                process.stdout.write(texte[lettreCourante]);
                lettreCourante++;
            }else{
                suite();
            }
        }, i*time);
    }
}

// Introduction of game 

// ☼

let intro =
`Bienvenue dans ce monde étrange remplie d'individus dont vous ne serez pas prêt à découvrir
Maintenant parlons de l'histoire de ce monde 
Pourquoi après tant d'année ce monde existe toujours ? 
Sachez que vous vous situez dans une sorte de labyrinthe 
dont vous n'en sortirez jamais
Au cours de votre aventure vous découvrirais plusieurs aliens 
Battez tous ces aliens et vous obtiendrais la clé de la sorti
puis trouver la porte pour en sortir
Courage les amis, personne n'en ai jamais sorti ! 

Direction possible : 

N : North
NW : North West 
NE : North East 

S : South 
SW : South West 
SE : South East 

W : West 
E : East 

Options : 

exit : Finish the programm
help : Ask for help
finish : To use key in the exit door
attack : To attack aliens

enter : Enter in the labyrinth
exit : Leave the labyrinth


`;

// setTimeout(); Fonction qui se declenche après un certains temps nom fonction puis temps

let suite = 
`Maintenant, vous entrez dans le labyrinthe ... 
`

// On précise que nous taperons de l'utf 8 dans la console

process.stdin.setEncoding('utf8');

// A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
// Ici on déclare ce que l'on fera lorsqu'on recevra une donée

process.stdin.on('data', (d) => {	

    let rep = d.toString().trim() 
    
	if(rep == "enter"){
        process.stdin.pause(); // stopper l'entrée
		slowLog(suite,100, () =>{
			slowLog("Quel direction voulez-vous prendre ? \n",100, () => {
				process.stdin.resume();// réactiver l'entrée à la fin du log
			});
        })
    }

    if(rep == "Help"){
	console.log(`Direction possible : 

N : North
NW : North West 
NE : North East 
        
S : South 
SW : South West 
SE : South East 
        
W : West 
E : East 
        
Options : 
        
exit : Finish the programm
help : Ask for help
finish : To use key in the exit door
attack : To attack aliens
        
enter : Enter in the labyrinth
exit : Leave the labyrinth
        
`);
    }

    if(rep == "W"){
		go.go("W");
    }

    if(rep == "S"){
		go.go("S");
    }

    if(rep == "SW"){
		go.go("SW");
    }

    if(rep == "SE"){
		go.go("SE");
    }

    if(rep == "N"){
		go.go("N");
    }
    
    if(rep == "NW"){
		go.go("NW");
    }
    
    if(rep == "NE"){
        go.go("NE");
    }   
    
    if(rep == "E"){
        go.go("E");
    }

    if(((go.map[go.joueur.y][go.joueur.x]) == "A1") || ((go.map[go.joueur.y][go.joueur.x]) == "A2")){
        if(rep == "attack"){
            if((go.map[go.joueur.y][go.joueur.x]) == "A1"){
                console.log(attack.attack(10));
                console.log(monster.alien1.life);   
            }
            if((go.map[go.joueur.y][go.joueur.x]) == "A2"){
                console.log(attack.attack(10));
                console.log(monster.alien2.life);   
            }
        }
    }

    if(rep == "finish"){
        if((go.map[go.joueur.y][go.joueur.x]) != "D"){
            console.log("You can't use the key, you must find the exit door in the labyrinth")
        }else{
            if(object.tested == 2){
                console.log("You have finish, well done");
            }else{
                
                console.log("You do not have both keys, you must go to face aliens for exit this labyrinth");
            }
        }
    }

	if(rep == "exit"){
		process.exit();
    }
    
    //if(rep == "attack") inventaire.attack();
});

exports.slowLog = slowLog;
exports.intro = intro;
