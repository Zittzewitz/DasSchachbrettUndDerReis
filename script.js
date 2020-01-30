let z = 1;
let ausgabeDiv = document.getElementById("ausgabe");
function reiskornRechner(){
    let table = document.getElementById("tbody");
    for(let i = 1; i<=64; i++){
        z = z *2;
        let gewichtG = (z * 0.02);
        if((gewichtG/1000) < 1.0 ){
            
            table.innerHTML += '<tr>' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + gewichtG + 'g' + '</td><td></td></tr>';
        }else if((gewichtG/1000) < 1000){
            gewichtGk = gewichtG / 1000;
            round = Math.round(gewichtGk);
            table.innerHTML += '<tr>' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + round + 'kg' + '</td><td></td></tr>';
        }else{
            gewichtGt = gewichtG / 1000000;
            
            round = Math.round(gewichtGt);
            table.innerHTML += '<tr id="row-t">' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + round + 't' + '</td><td id="feld-t"></td></tr>';
            //bigAs();
            console.log(gewichtGt);
            heavyAs();
            
        }
        
    }
}


reiskornRechner();
console.log(gewichtGt);


function heavyAs() {
    if (gewichtGt > 2.0 || gewichtGt <= 6.0) {
        document.getElementById("feld-t").innerHTML = "ElefantenEsel";
    }
    else {
        document.getElementById("feld-t").innerHTML = "Nutter";
    }
}
// function bigAs () {
//     switch(gewichtGt){
//         case (gewichtGt > 3 || gewichtGt <= 6):
//             document.getElementById("feld-t").innerHTML = "Elefant";
//             break;
//         default:
//             document.getElementById("feld-t").innerHTML = "Nix";
//     }
// }