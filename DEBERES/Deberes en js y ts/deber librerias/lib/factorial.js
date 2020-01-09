
module. exports = function (numUno){
    var resultadofactorial = 1;
    for(var i=1; i<= numUno; i++){
        resultadofactorial = resultadofactorial * i;
        if(i<numUno){
        console.log(`${i} *`);
        }else{
            console.log(`${i}"."\n`);
        }
    }
    

    return resultadofactorial;
}