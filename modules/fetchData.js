

/* funzione per il recupero dei dati necessari per lo svolgimento del gioco */

export async function fetchData(){

    const res = await fetch('quiz.json');


    return res;


}



