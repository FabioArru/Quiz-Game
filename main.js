import { initialGameInterface } from "./modules/initialGameInterface.js";
import { fetchData } from "./modules/fetchData.js";
import { gameInterface } from "./modules/gameInterface.js";
import { verifyAnswer } from "./modules/verifyAnswer.js";
import { calculatePoints } from "./modules/calculatePoints.js";
import { endGame } from "./modules/endGame.js";
import { points } from "./modules/calculatePoints.js";
import { screenCharge } from "./modules/finalCalculationScreen.js";

const screenImagePath = './images/loading-icon-animate.gif';


export const UIroot = document.getElementById('root');


let index = 0;


/* richiamo della funzione per creare l'interfaccia della prima schermata di gioco al caricamento del nostro documento*/
window.addEventListener('load', initialGameInterface);





/* richiamo dell funzione main una volta clickato il tasto "start game" */
document.addEventListener('click', main);








/* la funzione main è la funzione principale che da inizio al gioco, all'interno della quale verranno richiamate
tutte le funzioni necessarie al funzionamento del gioco stesso */

function main(e){

    
        fetchData()
        .then( res => res.json())
        .then( data =>{
            

                /* event handlers to work with user inputs*/
           
            
                if(e.target.id === "starting-btn"){
    
                    gameInterface(data[index])
                    

                }else if(e.target.classList.contains('answer-btn')){

                    let target = e.target;
                    verifyAnswer(target, data, index);
                    calculatePoints(verifyAnswer(target, data, index));
                    index++;
                    

                    
                    if(index < 10){

                        setTimeout(()=>{
                            gameInterface(data[index])
                        },500);

                    }else{

                        screenCharge(UIroot, screenImagePath);

                        UIroot.innerHTML = "";
                        setTimeout(()=>{

                            endGame(UIroot, points);

                        },1500)

                    }
                
                }else if(e.target.id === "skip-btn"){

                    calculatePoints('skip');

                    index++;

                    if(index < 10){

                        gameInterface(data[index]);

                    }else{
                        
                        UIroot.innerHTML = "";
                        
                        

                        screenCharge(UIroot, screenImagePath);

                     

                        setTimeout(()=>{

                            endGame(UIroot, points);

                        },1500)
                        
                        
                        

                    }
                    

                    

                }else if(e.target.classList.contains('reset')){

                    if(e.target.id === 'restart' || e.target.id === 'restart-btn'){

                        index = 0;
                        
                        calculatePoints('restart');
                        gameInterface(data[index])



                    }else if(e.target.id === 'back-home'){

                       
                        index = 0;

                        calculatePoints('restart');
                        initialGameInterface();

                    }else{

                        return;

                    }
                    


                }
           
        

                })


}



    















