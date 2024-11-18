//ex8 Donat un enter (x), fes un bucle que digui des del 0 a x, quins són parells i quins senars.

var num = 10

for (var i = 1; i <= num; i++) {
    if ((i % 2) === 0) {
        console.log("numero: "+i+" parell")
    }
    else{
        console.log("numero: "+i+" senar")
    }
}