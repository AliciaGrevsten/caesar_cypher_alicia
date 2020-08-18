const cypher = document.getElementById('cypher');

cypher.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('userInput').value;
    let shift = document.getElementById('shifts').value;
    let output = caesarShift(input, shift);
    document.getElementById("output").innerHTML = output;
}); 

const decypher = document.getElementById('decypher');

decypher.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('userInput').value;
    let shift = document.getElementById('shifts').value;
    let output = caesarShift(input, -(shift));
    document.getElementById("output").innerHTML = output;
}); 


let caesarShift = (input, shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const fullAlphabet = alphabet + alphabet + alphabet;

    let cipherOffset = (shift % alphabet.length);
    let cipherFinish = '';

  for(i=0; i<input.length; i++){
     let letter = input[i];
     let upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     let index = alphabet.indexOf(letter);
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       let nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }
    return cipherFinish;
}
