

export function verifyAnswer(input, data, index){

    if(input.value === data[index].correct_answer){


        input.style.backgroundColor = "green";

        return 'correct';
    }else{
        
        input.style.backgroundColor = "red";
        return 'wrong';
    }





}