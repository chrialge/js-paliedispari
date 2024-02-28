console.log("ciao")

/* 

    // logica senza funzione

 const arrayWord = word.split('');

 let letterByContrast = arrayWord.reverse();

 const wordByContrast = letterByContrast.join('');


 if (wordByContrast == word){
     alert('la tua parola e palidroma')
 }else{
     alert('la tua parola non e palidroma')
 }

*/



const wordElement = document.getElementById("word");


document.getElementById('palidroma_form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const word = wordElement.value;
    console.log(word);

    

    /**
     * funzione che prima inverte l'ordine delle lettere e le unisce e controlla se e uguale alla parola antecedente
     * @param {string} word 
     */
    function palidromaWord(word){
    const arrayWord = word.split('');

    let letterByContrast = arrayWord.reverse();

    const wordByContrast = letterByContrast.join('');
    return wordByContrast;
    }

 const wordByContrast = palidromaWord(word);
 const cardElement = document.querySelector('.card');

 if (wordByContrast == word){
     const palidromamarkup =`
     <h1 class="pali-positive">La parola ${word} che hai inserito e un palidroma</h1>
     `
     cardElement.innerHTML = palidromamarkup;
 }else{
     const notPalidromamarkup =`
     <h1 class="pali-positive">La parola ${word} che hai inserito non e un palidroma</h1>
     `
     cardElement.innerHTML = notPalidromamarkup;
 };

});
 
const pairElement = document.getElementById("pair_or_dispair");


const numbElement = document.getElementById("number_user");


const resultElement = document.querySelector('.result');


document.getElementById("form_pair").addEventListener('submit', function(e){
    e.preventDefault();
    const pair = pairElement.value;
    const numb = Number(numbElement.value);
    

    /**
     * funzione che genera un numero random tra 1 e 5
     * @returns number
     */
    function numberRandom() {
        const numbRandom = Math.floor(Math.random() * 5) + 1
        return numbRandom;
    }

    const numbRandom = numberRandom();
    
    /**
     * la funzione somma quando a i due parametri
     * @param {number} 
     * @param {number} numb 
     * @returns number
     */
    function pairOrDispair(numb, numbRandom) {
        const sum = numb + numbRandom;
        return sum;
    }

    
    const sum = pairOrDispair(pair, numb)
    const victoryMarkup = `
    <h1>Hai vinto tu, perche la somma del tuo numero ${numb} e di quello del computer ${numbRandom} e di: ${sum}</h1>
    <h1>Quindi e ${pair} come hai scelto tu</h1>
    `
    const loseMarkup = `
    <h1>Hai perso tu, perche la somma del tuo numero ${numb} e di quello del computer ${numbRandom} e di: ${sum}</h1>
    <h1>Quindi e ${pair} come non hai scelto tu</h1>
    `
    

    if(sum % 2 == 0 && pair == 'pari'){

        resultElement.innerHTML = victoryMarkup;
    }else if(sum % 2 != 0 && pair == 'dispari'){

        resultElement.innerHTML = victoryMarkup;

    }else if(sum % 2 == 0 && pair == 'dispari'){

        resultElement.innerHTML = loseMarkup;
    } else{

        resultElement.innerHTML = loseMarkup;
    }
    const resultPairOrDispair = pairOrDispair(pair, numb)
    console.log(resultPairOrDispair);

})


