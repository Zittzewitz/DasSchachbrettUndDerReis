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

        }
        
        
        
    }
}


reiskornRechner();

function bigAs () {
    switch(gewichtGt){
            case 0:
                if(gewichtGt > 2 || gewichtGt < 6){
                let row = document.getElementById("feld-t");
                //let elRow = row.createElement("td");
                row.innerHTML = "Elefant";
                break;
            }
                default: 
                row.innerHTML = "Keiner";

    }
}