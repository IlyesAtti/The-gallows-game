let life = 7;
let word = "";
let spaces = [];
let foundedCharacter = 0;

function startGame() {
    word = document.getElementById("word").value;
    document.getElementById('lifes-left').innerText = "Lifes left: " + life;
    for (let charact = 0; charact < word.length; ++charact) {    
        spaces[charact] = "_";
    }
    return (document.getElementById('foundChar').innerText = spaces);
}

function searchChar() {
    let found = false;
    let searchCharacter = document.getElementById("character").value;
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == searchCharacter) {
            spaces[i] = searchCharacter;
            found = true;
            ++foundedCharacter;
        }
    }
    if (found == false) {
        --life;
    }
    if (life == 0) {
        document.getElementById('finalRezult').innerText = "You lose";
    }
    if (foundedCharacter == word.length) {
        document.getElementById('finalRezult').innerText = "You win";
    }
    document.getElementById('lifes-left').innerText = "Lifes left: " + life;
    document.getElementById('foundChar').innerText = spaces;
    return (clearInput());
}

function clearInput(){
    let getValue = document.getElementById("character");
    if (getValue.value !="") {
        getValue.value = "";
    }
}