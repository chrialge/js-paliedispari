console.log("ciao")



// const arrayWord = word.split('');

// let letterByContrast = arrayWord.reverse();

// const wordByContrast = letterByContrast.join('');


// if (wordByContrast == word){
//     alert('la tua parola e palidroma')
// }else{
//     alert('la tua parola non e palidroma')
// }
// const word = prompt('Inserisci solo una parola:');

// palidromaWord(word)
// function palidromaWord(word){
//     const arrayWord = word.split('');

//     let letterByContrast = arrayWord.reverse();

//     const wordByContrast = letterByContrast.join('');


//     if (wordByContrast == word){
//         alert('la tua parola e palidroma')
        
//     }else{
//         alert('la tua parola non e palidroma')
        
//     }

// }
const pair = prompt('vuoi il numero pari o dispari','pari o dispari');
console.log(typeof pair);

const numb = Number(prompt('inserisci un numero tra 1 e 5'));
console.log(numb);

function numberRandom() {
    const numbRandom = Math.floor(Math.random() * 5) + 1
    return numbRandom;
}
const numbRandom = numberRandom();
console.log(numbRandom);

function sumNumber(numbRandom){
    const sum = numb + numbRandom;

    return sum;
}
const sum = sumNumber(numbRandom)
console.log(sum)

if(sum % 2 == 0 && pair == 'pari'){
    console.log('hai vinto tu pari')
}else if(sum % 2 != 0 && pair == 'dispari'){
    console.log('hai vinto tu dispari')
}else{
    console.log('hai perso')
}