


export function screenCharge(element, path){


    const screenImage = document.createElement('img');
    screenImage.src = path;
    screenImage.id = 'charge-image';

    element.appendChild(screenImage);

}