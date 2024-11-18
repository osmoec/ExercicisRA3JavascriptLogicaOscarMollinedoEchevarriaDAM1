//ex11 Modifica l’exercici 9 perquè només mostri les línies amb estrelles imparelles. Utilitza la
// sentència continue.

function piramide(){
    var lin = ""
    for (var i = 0; i <= 5; i++){
        lin = ""
        if (i % 2 !== 0){
            for (var j = 0; j <= i; j++){
                lin += "*"
            }
            console.log(lin)
        }
        else{
            continue
        }
    }
}

piramide()