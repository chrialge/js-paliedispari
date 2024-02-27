console.log("ciao")



// const arrayWord = word.split('');

// let letterByContrast = arrayWord.reverse();

// const wordByContrast = letterByContrast.join('');


// if (wordByContrast == word){
//     alert('la tua parola e palidroma')
// }else{
//     alert('la tua parola non e palidroma')
// }
const word = prompt('Inserisci solo una parola:');

palidromaWord(word)
function palidromaWord(word){
    const arrayWord = word.split('');

    let letterByContrast = arrayWord.reverse();

    const wordByContrast = letterByContrast.join('');


    if (wordByContrast == word){
        alert('la tua parola e palidroma')
        
    }else{
        alert('la tua parola non e palidroma')
        
    }

}
