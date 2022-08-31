

function writeCards(names, feeling){
    const call = []
    for (let i = 0; i < names.length; i++) {
        call.push(`Thank you, ${names[i]}, for the wonderful ${feeling} gift!`);
    
    }
    return call;
}

function countDown(){
    let countDown = 10
    while (countDown > -1) {
        console.log(countDown--)
        }
}