"use strict"



window.onload = () => {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let column1 = document.getElementsByClassName("firstColumn");
    let column2 = document.getElementsByClassName("secondColumn");
    let column3 = document.getElementsByClassName("thirdColumn");
    let column4 = document.getElementsByClassName("fourthColumn");
    let column5 = document.getElementsByClassName("fifthColumn");
    let column6 = document.getElementsByClassName("sixthColumn");
    let column7 = document.getElementsByClassName("seventhColumn");
    let column8 = document.getElementsByClassName("eighthColumn");
    
    for(let i = 0; i < 8; i++) {
        column1[i].innerHTML = alphabet[i];
        column2[i].innerHTML = alphabet[i];
        column3[i].innerHTML = alphabet[i];
        column4[i].innerHTML = alphabet[i];
        column5[i].innerHTML = alphabet[i];
        column6[i].innerHTML = alphabet[i];
        column7[i].innerHTML = alphabet[i];
        column8[i].innerHTML = alphabet[i];
       
    }

}