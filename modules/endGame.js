


export function endGame(element, score){

    element.innerHTML = "";

    const messageContainer = document.createElement('div');
    messageContainer.id = "final-message";
    messageContainer.innerHTML = `

        <h3>Congratulations you complete the game with a highscore of</h3>
        <h3 id="score">${score}/100</h3>

        <h4>Thank you for playng this game</h4>   
    `



    const homeBtn = document.createElement('input');
    homeBtn.setAttribute('type', 'submit');
    homeBtn.setAttribute('value', 'Home');
    homeBtn.classList = "cmd-btn";
    homeBtn.classList.add('reset');
    homeBtn.id = 'back-home';



    const restartBtn = document.createElement('input');
    restartBtn.setAttribute('type', 'submit');
    restartBtn.setAttribute('value', 'Restart');
    restartBtn.classList = "cmd-btn";
    restartBtn.classList.add('reset');
    restartBtn.id = 'restart';


    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'controls-container';

    controlsContainer.appendChild(restartBtn);
    controlsContainer.appendChild(homeBtn);


    const endGameContainer = document.createElement('div');
    endGameContainer.id = 'endGame-container';

    endGameContainer.appendChild(messageContainer);
    endGameContainer.appendChild(controlsContainer);

    


    element.appendChild(endGameContainer);

    


}