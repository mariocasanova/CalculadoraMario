var n1 = -1;
var n2 = -1;
var operant = -1;

function TeclatNumeric(numero) {
//AGAFAR PRIMER NUMERO
if (n1 == -1) {
PrimerNumero(numero);
}

//AGAFAR OPERANT
else if (operant == -1) {
Operants(numero);
}

//AGAFAR SEGON NUMERO
else if (n2 == -1) {
SegonNumero(numero);
}

//SI N1 I N2 I OPERANT ELEGITS
else if (n1 != -1 && n2 != -1 && operant != -1) {
//SUMA
if (operant == 22) {
suma(n1, n2);
//MULTIPLICACIO
} else if (operant == 21) {
multiplicar(n1, n2);
//DIVISIO
} else if (operant == 20) {
dividir(n1, n2);
//RESTA
} else if (operant == 23) {
resta(n1, n2);
}
}


}

function PrimerNumero(primerDonat) {
n1 = primerDonat;
}

function SegonNumero(segonDonat) {
n2 = segonDonat;
}

function Operants(operantdonat) {
operant = operantdonat;

}

function resultatfinal(resultatdonat){
resultat = resultatdonat;
}

function borrar() {
n1 = -1;
n2 = -1;
operant = -1;

}
//
function resta(n1, n2) {
var operacio = parseInt(n1) - parseInt(n2);
borrar();
document.getElementById("resultat").innerText = operacio;
}

function dividir(n1, n2) {
var operacio = parseInt(n1) / parseInt(n2);
document.getElementById("resultat").innerText = operacio;
borrar();
}

function suma(n1, n2) {
var operacio = parseInt(n1) + parseInt(n2);
document.getElementById("resultat").innerText = operacio;
borrar();
}

function multiplicar(n1, n2, final) {
var operacio = parseInt(n1) * parseInt(n2);
document.getElementById("resultat").innerText = operacio;
borrar();
}
