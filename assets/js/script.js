console.log("ciao")


const word = 'ciao';
const arrayWord = word.split('');
console.log(arrayWord);
let letterByContrast = arrayWord.reverse();
console.log(letterByContrast)
const wordByContrast = letterByContrast.join('');
console.log(wordByContrast);

if (wordByContrast = word){
    alert('la tua parola e palidroma')
}else{
    alert('la tua parola non e palidroma')
}
