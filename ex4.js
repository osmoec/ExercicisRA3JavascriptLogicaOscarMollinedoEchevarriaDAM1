//ex4 Modifica l’exercici 1, perquè mostri el text: és múltiple de 3, de 7 o de 3 i 7 utilitzant un switch.

var num = 44

var cas = 0


if(((num % 3) === 0) && ((num % 7) === 0)){
    cas = 3
}

else if ((num % 7) === 0){
    cas = 2
}
else if ((num % 3) === 0){
    cas = 1
}

else{
    console.log("no es multiple de 3 o 7")
}

switch (cas){
    case 1:
        console.log(num+" es multiple de 3")
        break

    case 2:
        console.log(num+" es multiple de 7")
        break

    case 3:
        console.log(num+" es multiple de 3 i 7")
}