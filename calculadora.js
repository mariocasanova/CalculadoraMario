var operandoa;
var operandob;
var operacio;

    function init(){
      //variables
      var resultat = document.getElementById("resultat");
      var reset = document.getElementById("reset");
      var suma = document.getElementById("suma");
      var resta = document.getElementById("resta");
      var multiplicacio = document.getElementById("multiplicacio");
      var divisio = document.getElementById("divisio");
      var igual = document.getElementById("igual");
      var u = document.getElementById("u");
      var dos = document.getElementById("dos");
      var tres = document.getElementById("tres");
      var quatre = document.getElementById("quatre");
      var cinc = document.getElementById("cinc");
      var sis = document.getElementById("sis");
      var set = document.getElementById("set");
      var vuit = document.getElementById("vuit");
      var nou = document.getElementById("nou");
      var zero = document.getElementById("zero");

      //Eventos de click
      u.onclick = function(e){
          resultat.textContent = resultat.textContent  + "1";
      }
      dos.onclick = function(e){
          resultat.textContent = resultat.textContent  + "2";
      }
      tres.onclick = function(e){
          resultat.textContent = resultat.textContent  + "3";
      }
      quatre.onclick = function(e){
          resultat.textContent = resultat.textContent  + "4";
      }
      cinc.onclick = function(e){
          resultat.textContent = resultat.textContent  + "5";
      }
      sis.onclick = function(e){
          resultat.textContent = resultat.textContent  + "6";
      }
      set.onclick = function(e){
          resultat.textContent = resultat.textContent  + "7";
      }
      vuit.onclick = function(e){
          resultat.textContent = resultat.textContent  + "8";
      }
      nou.onclick = function(e){
          resultat.textContent = resultat.textContent  + "9";
      }
      zero.onclick = function(e){
          resultat.textContent = resultat.textContent  + "0";
      }


      reset.onclick = function(e){
          resetejar();
      }

      suma.onclick = function(e){
          operandoa = resultat.textContent;
          operacio = "+";
	  llimpiar();
      }

      resta.onclick = function(e){
          operandoa = resultat.textContent;
          operacio = "-";
	  llimpiar();
      }

      multiplicacio.onclick = function(e){
          operandoa = resultat.textContent;
          operacio = "*";
	  llimpiar();
      }

      divisio.onclick = function(e){
          operandoa = resultat.textContent;
          operacio = "/";
	  llimpiar();
      }

      igual.onclick = function(e){
          operandob = resultat.textContent;
          resoldre();
	  

      function llimpiar(){
      resultat.textContent = "";
      }

      function resetejar(){
      resultat.textContent = "";
      operandoa = 0;
      operandob = 0;
      operacio = "";
      }

    function resoldre(){
      var res = 0;
      switch(operacio){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
      }
      resetejar();
      resultat.textContent = res;
    }
}
}
