
const användarNamnConst = "Sara";
const lösenOrdConst = "qwe123";

function inputFunction(){
    let användarNamnInput = document.getElementById("användarNamn").value;
    let lösenordInput = document.getElementById("lösenOrd").value;

    if (användarNamnInput === användarNamnConst && lösenordInput === lösenOrdConst){
        document.getElementById("output").innerHTML = "tjenare";
    }

    else{
        document.getElementById("output").innerHTML = "nej";
    }
    
}