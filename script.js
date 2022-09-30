
const användarNamnNyckel = "Sara";                                  
const lösenOrdNyckel = "qwe123";                                    

let välkommen = document.getElementById("välkommenText");            
let loggInShow = document.getElementById("loggIn");                  

document.getElementById("loggUt").style.visibility = "hidden";      

if (localStorage.getItem("AnvändarNamn") === användarNamnNyckel && localStorage.getItem("Lösenord") === lösenOrdNyckel){

        document.getElementsByClassName('loggIn')[0].style.visibility = 'hidden';       
                                                                                        
        välkommen.innerHTML = "Välkommen";                                              
        document.getElementById("loggUt").style.visibility = "visible";
}


function inputFunction(){
    let användarNamnInput = document.getElementById("användarNamn").value;              
    let lösenordInput = document.getElementById("lösenOrd").value;                       
                                                                                        
    if (användarNamnInput === användarNamnNyckel && lösenordInput === lösenOrdNyckel){  
                                                                                   
        localStorage.setItem("AnvändarNamn", användarNamnInput);
        localStorage.setItem("Lösenord", lösenordInput);
        
        document.getElementsByClassName('loggIn')[0].style.visibility = 'hidden';       
                                                                                        
        välkommen.innerHTML = "Välkommen, du är nu inloggad";                                              
        document.getElementById("loggUt").style.visibility = "visible";                 
        
        
    }

    else{
        document.getElementById("output").innerHTML = "Fel användarnamn eller lösenord.";
    }
    
}

function loggaUt(){                                                                     
    if ( document.getElementsByClassName("loggIn")[0].style.visibility === "hidden"){   
        document.getElementsByClassName("loggIn")[0].style.visibility = "visible";      
        välkommen.innerHTML = "Logga In";                                               
        document.getElementById("loggUt").style.visibility = "hidden";

    }
    
    
        
        
    
}