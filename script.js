let life = 7;
let word = "";
let spaces = [];

function StartGame() {
    word = document.getElementById("Word").value;
    document.getElementById('Lifes-left').innerText = "Lifes left: " + life;
    for (let charact = 0; charact < word.length; ++charact) {    
        spaces[charact] = "_";
    }
    document.getElementById('FoundChar').innerText = spaces;
}
let foundedCharacter = 0;
function SearchChar() {
    let found = false;
    let searchCharacter = document.getElementById("Character").value;
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
        document.getElementById('FinalRezult').innerText = "You lose";
    }
    if (foundedCharacter == word.length) {
        document.getElementById('FinalRezult').innerText = "You win";
    }
    document.getElementById('Lifes-left').innerText = "Lifes left: " + life;
    document.getElementById('FoundChar').innerText = spaces;
    clearInput();
}

function clearInput(){
    var getValue = document.getElementById("Character");
      if (getValue.value !="") {
          getValue.value = "";
      }
}