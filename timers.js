function countdown(num){
    let timer = setInterval(function(){
        num--;
        if (num <= 0){
            clearInterval(timer);
            console.log("DONE!");
        }
        else if (num > 0){
            console.log(num);
        }
    }, 1000)
}

function randomGame(){
    let counter = 1;
    let pickedNum = setInterval(function(){
        Math.random();
        if (Math.random() <= .75){
            counter++;
        }
        else {
            clearInterval(pickedNum);
            console.log(counter + " times");
        }
    }, 1000)
}