import { UIroot } from "../main.js";
import {points} from "./calculatePoints.js"
import { displayPoints } from "./displayPoints.js";



/* funzione che ci permette di creare l'interfaccia del gioco e richiamarla ogni qqlavolta sia necessaria,
essa prende ine ntrata un parametro = dati fetchati dalla nostra funzione di recupero dati */
export function gameInterface(quiz){
        
        UIroot.innerHTML = "";

        let question = quiz.question;
        let answers = quiz.answers;

        /* main container for the quiz game */
        const gameInterfaceContainer = document.createElement('div');
        gameInterfaceContainer.id = 'game-container'

        /* container for points and time counter */
        const dataGameContainer = document.createElement('div');
        dataGameContainer.id = 'data-container';

        const timerContainer = document.createElement('div');
        timerContainer.id = "timer-container";


        const pointsContainer = document.createElement('div');
        pointsContainer.id = 'points-container';

        displayPoints(pointsContainer, points);


        dataGameContainer.appendChild(pointsContainer);

        const questionContainer = document.createElement('div');
        questionContainer.id = 'question-container';

        questionContainer.appendChild(document.createTextNode(question));


        const answerContainer = document.createElement('div');
        answerContainer.id = 'answer-container'; 

        answers.forEach((answer)=>{
            
            const answerBtn = document.createElement('input');
            answerBtn.setAttribute('type', 'submit');
            answerBtn.setAttribute('value', answer);
            answerBtn.classList = "answer-btn";

            answerContainer.appendChild(answerBtn);
        })


        const cmdContainer = document.createElement('div');
        cmdContainer.id = "cmd-container";

        const restartBtn = document.createElement('input');
        restartBtn.setAttribute('type', 'submit');
        restartBtn.setAttribute('value', 'Resatart');
        restartBtn.classList = 'cmd-btn';
        restartBtn.classList.add('reset');
        restartBtn.id = "restart-btn";

        const skipBtn = document.createElement('input');
        skipBtn.setAttribute('type', 'submit');
        skipBtn.setAttribute('value', 'Skip');
        skipBtn.classList = "cmd-btn";
        skipBtn.id = "skip-btn";

        cmdContainer.appendChild(restartBtn);
        cmdContainer.appendChild(skipBtn);


        gameInterfaceContainer.appendChild(dataGameContainer);
        gameInterfaceContainer.appendChild(questionContainer);
        gameInterfaceContainer.appendChild(answerContainer);
        gameInterfaceContainer.appendChild(cmdContainer);

        UIroot.appendChild(gameInterfaceContainer);
            
    
}