import { UIroot } from "../main.js";


/* funzione per la creazione dell'interfaccia della prima schermata di gioco */
export function initialGameInterface(){

    UIroot.innerHTML = '';

    
    const mainContainer = document.createElement("div");
    mainContainer.id = 'main-container';


    const heading = document.createElement('h2');
    heading.appendChild(document.createTextNode('Quiz game about NBA'))

    const rulesList = document.createElement('ol');
    rulesList.id = 'rules';

    rulesList.innerHTML = `

    <li class='rule'>In this quiz you have to answer 10 different questions</li>
    <li class='rule'>For each question you have 4 different possible answers</li>
    <li class='rule'>For each question you have 10 seconds to decide the correct answer or to skip the question</li>
    <li class='rule'>For each correct answer you gain 10 pints, for each wrong answers you lose 10 points and for each answer you gain 5 points</li>
    

    
    
    `
    
    const startingButton = document.createElement('button');
    startingButton.id = "starting-btn";
    startingButton.innerText = "Start";




    mainContainer.appendChild(heading);
    mainContainer.appendChild(rulesList);
    mainContainer.appendChild(startingButton);


    

    UIroot.appendChild(mainContainer);

}