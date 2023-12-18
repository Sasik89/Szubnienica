var haslo = "szukam pracy";
haslo = haslo.toUpperCase();

var ukryte_haslo = "";
var skuchy = 0;

for(var i = 0; i< haslo.length; i++){
    if(haslo.charAt(i) == " ") {
    ukryte_haslo = ukryte_haslo + " ";
    } else {
        ukryte_haslo = ukryte_haslo + "-";
    }
}

var Litery = new Array(32);

Litery[0] = "A"
Litery[1] = "Ą"
Litery[2] = "B"
Litery[3] = "C"
Litery[4] = "Ć"
Litery[5] = "D"
Litery[6] = "E"
Litery[7] = "Ę"
Litery[8] = "F"
Litery[9] = "G"
Litery[10] = "H"
Litery[11] = "I"
Litery[12] = "J"
Litery[13] = "K"
Litery[14] = "L"
Litery[15] = "Ł"
Litery[16] = "M"
Litery[17] = "N"
Litery[18] = "Ń"
Litery[19] = "O"
Litery[20] = "Ó"
Litery[21] = "P"
Litery[22] = "R"
Litery[23] = "S"
Litery[24] = "Ś"
Litery[25] = "T"
Litery[26] = "U"
Litery[27] = "W"
Litery[28] = "Y"
Litery[29] = "Z"
Litery[30] = "Ź"
Litery[31] = "Ż"


window.onload = start;

function start(){
    set_password();
    generate_letters();
}

function generate_letters() {
    var html = "";
    for(var i = 0 ; i <  32 ; i++) {
    if((i+1)%8 == 0) {
     var temp = '<div onclick="check(' + i + ')"; id="l' + i + '">' + Litery[i] + '</div>' + '<br>';
        html = html + temp;
    } else{
     var temp = '<div onclick="check(' + i + ')"; id="l' + i + '">' + Litery[i] + '</div>';
        html = html + temp;
    }
    }
    document.getElementById("litery").innerHTML = html;
    }


function set_password() {
document.getElementById("haslo").innerHTML = ukryte_haslo;
}


function check(letter_no){
    var litera = Litery[letter_no];
    var trafienie = false;
    for(var i=0; i<haslo.length; i++){
        if(haslo.charAt(i) == litera) {
            ukryte_haslo = ukryte_haslo.substring(0, i) + litera +
                            ukryte_haslo.substring(i+1);
            trafienie = true;
        }
        }
        var letterId = "l" + letter_no;
        document.getElementById(letterId).setAttribute("onclick", ";")

        if(!trafienie && skuchy<9){
        skuchy++;
            var obrazek = '<img src="img/s' + skuchy + '.jpg">'
            document.getElementById("szubienica").innerHTML = obrazek;
            document.getElementById(letterId).style.background = "#550000";
            document.getElementById(letterId).style.background = "#FF0000";
            document.getElementById(letterId).style.border = "2px solid #FF00000";
        } else {
            document.getElementById(letterId).style.background = "#005500";
            document.getElementById(letterId).style.background = "#00FF00";
            document.getElementById(letterId).style.border = "2px solid #00FF000";
        }


        if(skuchy >= 9){
            document.getElementById("litery").innerHTML = '<p id="lose">Przegrana!!!</p>';
        }
        if(haslo == ukryte_haslo){
            document.getElementById("litery").innerHTML = '<p id="win">Wygrana!!!</p>';
        }

    set_password();
}