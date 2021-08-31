export let points = 0;

export function calculatePoints(result){
    
    if(result === 'correct'){

        points+= 10;

    }else if( result === 'wrong'){

        points -= 10;

    }else if(result ==='skip'){
        points += 5;
    }else{

        points = 0;

    }
    

    console.log(points);
    return points;
}