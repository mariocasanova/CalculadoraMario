//nomes numeros
function solnumeros(e){

    key=e.keyCode || e.which;

    teclat=String.fromCharCode(key);

    numeros="0123456789";

    especials="8-37-39-46";

    tecla_especial=false;

    for(var i in especials){
        if(key==especials[i]){
            tecla_especial=true;
        }
    }

    if(numeros.indexOf(teclat)==-1 && !tecla_especial){
        return false;
    }

}

//per assignar cada valor

function retornar(num){

    var anterior=document.fo.valors.value;

    document.getElementById("valors").value=anterior+num;

}

//per eliminar ultim caracter

function eliminar(){

    var anterior=document.fo.valors.value;

    var nouvalor=anterior.substring(0,anterior.length-1);

    document.getElementById("valors").value=nouvalor;
}


// per eliminar tot

function eliminar_tot(){
    document.fo.valors.value="";
}


//para  validar los signos

function comprobar(num){ 
var anterior = document.fo.valors.value;
if(anterior==""){
document.fo.valors.value="";
}else{    
    var anterior = document.fo.valors.value;
    document.getElementById("valors").value=anterior+num;
    aixo=document.fo.valors.value;

    record=0; 
    igual=1; 
    var lletraRecord 
    var b=0 
    var lletra="" 

    for (a=1;aixo.length;a++){      
    if (aixo.charAt(a)=="+" || aixo.charAt(a)=="-" || aixo.charAt(a)=="*" || aixo.charAt(a)=="/" || aixo.charAt(a)=="."){ 
    igual=igual+1; 
    lletra=aixo.charAt(a);
    }else{ 
         if(igual>record){record=igual;lletraRecord=lletra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      lletraRecord=lletra;
    } 

    if (record>2){
        var anterior = aixo;
        var nouvalor = anterior.substring(0, anterior.length-1);
        document.getElementById("valors").value=nouvalor;
        record=0;
	b=0;
	igual=1;
	lletra="";
	lletraRecord="";
    }     
} 

}
function calcular(){
    var resultat=eval(document.fo.valors.value);

    if(resultat=="Infinity"){
        document.fo.valors.value="No es pot dividir entre zero";

    }else{
        document.fo.valors.value=resultat;
    }
    
}



