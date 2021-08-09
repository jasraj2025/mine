player1_name = localStorage.getItem("plyer1_name");
player2_name = localStorage.getItem("plyer2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("plyer1_name").innerHTML = player1_name + ";" ;
document.getElementById("plyer2_name").innerHTML = player2_name + ";" ;

document.getElementById("plyer1_score").innerHTML = player1_score + ";" ;
document.getElementById("plyer2_score").innerHTML = player2_score + ";" ;

document.getElementById("player_ouection").innerHTML = "Quection Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    getword = document.getElementById("word").value;
    }