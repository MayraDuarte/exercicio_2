function notas () {
    let nota = "nota";
    nota = prompt("nota recebida");

    switch( nota.toUpperCase()) {
        case "A":
            alert("Excelente!");
            break;
        case "B" :
            alert("Otimo!");
            break;
        case "C" :
            alert("Bom!");
            break;
        case "D" :
            alert("Regular!");
            break;
        case "E" :
            alert("Ruim!");
            break;
         case"F" :
            alert ("Nos vemos novamente ano que vem...");
         break;
        default:
            alert("Nota inexistente");
         }
    }
     notas();  
        function clickReiniciar (){
            notas();
        }
