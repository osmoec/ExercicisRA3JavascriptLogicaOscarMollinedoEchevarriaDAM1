//ex9 Realitza una funció que, utilitzant bucles, mostri per pantalla el següent patró:
// *
// * *
// * * *
// * * * *
// * * * * *

function piramide(){
    var lin = ""
    for (var i = 0; i <= 5; i++){
        lin = ""
        for (var j = 0; j <= i; j++){
               lin += "*"
        }
        console.log(lin)
    }
}

piramide()