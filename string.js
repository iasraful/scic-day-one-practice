// return 'cat'.charAt(1)

// // Comparing string 

// let a = 'a'
// let b = 'b'
// if (a < b){
//     console.log(a +' ' + 'is less then' +  ' ' + b);
// }
// else if (a > b) {
//     console.log(a +' ' + 'is bigger than ' + ' ' + b);
    
// }
// else{
//     console.log(a + 'and ' + b + 'are equal');
// }

//     Use of String .chartAt

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

// Use of concat();

// const firstName = 'Asraful';
// const lastName = 'Islam';

// console.log(firstName.concat(',' , lastName));


// USE of String.prototype.includes()

const firstSentence = 'Amar Naam Ashraf'
const searchingWord = 'Naam'
console.log(`The word "${searchingWord}" ${firstSentence.includes(searchingWord) ? 'is ' : 'is not'} in the line `);   // Here we use the ternary operator we are searching the word of "Naam" and check it in the firstSentence that the Naam is in there or not  &&& the outPut is The word is in the sentence.


// Use of String.prototype.indexOf()


