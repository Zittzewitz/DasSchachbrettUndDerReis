function schachBrettG(a,b){
    let div = document.createElement("div");
    div.id = a + b;
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "green";
    div.style.border = "2px solid black";
    schachbrett.appendChild(div);

    
}
function reihe(x){
    for(let i = 1; i <= x ; i++){
        schachBrettG(3,5);
    }

}
function reihenFolge(x){
    for(let i = 1; i <= x ; i++){
        reihe(8);
        schachbrett.innerHTML += "<br>";
    }
}


function reiskornRechner(){
    function we(i){
        let wieOft = round/i;
        if(wieOft > 1){
            rein = Math.round(wieOft);
            return rein;
        }
     }
    let table = document.getElementById("tbody");
    let rein = "";
    const ernteMenge = 498000000;
    const gewichtEifelturm = 10100;
    const geElefant = 5;
    const geMensch = 80;
    for(let i = 1; i<=64; i++){
        z = z *2;
        let gewichtG = (z * 0.02);
        if((gewichtG/1000) < 1.0 ){
            
            table.innerHTML = '<tr>' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + gewichtG + 'g' + '</td><td></td></tr>';
        }else if((gewichtG/1000) < 1000){
            gewichtGk = gewichtG / 1000;
            round = Math.round(gewichtGk);
            if(round > geMensch && round < (geElefant*1000)){
                rein = Math.round((round/geMensch)) + ' x so schwer wie ein Mensch';
            }
            table.innerHTML += '<tr>' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + round + 'kg' + '</td><td>' + rein + '</td></tr>';
        }else{
            gewichtGt = gewichtG / 1000000;
            round = Math.round(gewichtGt);
           
            let veVar = we(ernteMenge);
            let geEifel = we(gewichtEifelturm);
            let elefant = we(geElefant);
            let mensch = we(geMensch);

           
            if(round > elefant && round < gewichtEifelturm){
                rein = elefant + " x so schwer wie ein Afrikanischer Elefant"; 
            }else if (round > gewichtEifelturm && round < ernteMenge ){
                rein = geEifel + " x so schwer wie der Eifelturm";
            }else if(round > ernteMenge){
                rein = veVar + " x Gesamternte Weltweit 2019/2920";
            }else{
                rein= "";
            }
            table.innerHTML += '<tr id="row-t">' + '<td>' + i + '.' +'Schachfeld: ' + '</td><td>' +(z) + ' Reiskörner ' + '</td><td>' + 'Gewicht: ' + round + 't' + '</td><td id="feld-t">' + rein + '</td></tr></td></tr>';
        }    
    }
}