console.log("ciao")



// const arrayWord = word.split('');

// let letterByContrast = arrayWord.reverse();

// const wordByContrast = letterByContrast.join('');


// if (wordByContrast == word){
//     alert('la tua parola e palidroma')
// }else{
//     alert('la tua parola non e palidroma')
// }

const wordElement = document.getElementById("word")


document.getElementById('palidroma_form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const word = wordElement.value
    console.log(word)

    palidromaWord(word)
    function palidromaWord(word){
    const arrayWord = word.split('');

    let letterByContrast = arrayWord.reverse();

    const wordByContrast = letterByContrast.join('');

    const cardElement = document.querySelector('.card')
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
        
    }

 }
})
 
// const pair = prompt('vuoi il numero pari o dispari','pari o dispari');
// console.log(typeof pair);

// const numb = Number(prompt('inserisci un numero tra 1 e 5'));
// console.log(numb);

// function pairOrDispair(pair, numb) {
//     function numberRandom() {
//         const numbRandom = Math.floor(Math.random() * 5) + 1
//         return numbRandom;
//     }
//     const numbRandom = numberRandom();
//     console.log(numbRandom);
    
//     function sumNumber(numbRandom){
//         const sum = numb + numbRandom;
    
//         return sum;
//     }
//     const sum = sumNumber(numbRandom)
//     console.log(sum)
    
//     if(sum % 2 == 0 && pair == 'pari'){
//         console.log('hai vinto tu pari')
//     }else if(sum % 2 != 0 && pair == 'dispari'){
//         console.log('hai vinto tu dispari')
//     }else{
//         console.log('hai perso')
//     } 

// }
