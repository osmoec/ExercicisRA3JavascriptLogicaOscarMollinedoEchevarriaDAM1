//ex5 Donat un enter (x), troba el màxim número n tal que 1+2+3+...+n <= x
// Exemple: si x=15, n seria 5 ( 1 + 2 +3 +4 +5 = 15)

var num = 36

var suma = 0

var cont = 0

for (var i = 0; suma <= num; i++) {
    suma = suma + i
    cont = i
}

console.log("Total de cicles "+cont)
