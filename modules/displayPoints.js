


export function displayPoints(element, value){

    const parent = element;

    const heading = document.createElement('h3');

    heading.id = 'score-heading';


    heading.innerText = "Score: " + value;


    parent.appendChild(heading);

    



}