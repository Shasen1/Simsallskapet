localStorage.setItem("Användarnamn", "Hitler");
localStorage.setItem("lösenord", "heil");




function inputFunction(){
    let användarNamnInput = document.getElementById("användarNamn").value;
    let lösenordInput = document.getElementById("lösenOrd").value;

    if (localStorage.användarnamn === användarNamnInput && localStorage.lösenord === lösenordInput){
        document.getElementById("output").innerHTML = "tjenare";
    }

    else{
        document.getElementById("output").innerHTML = "nej";
    }
}