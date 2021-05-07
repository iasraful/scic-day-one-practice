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

const line = 'the dog is looking so good rather than a crow';
const finding = 'the';
const indexOfUse = line.indexOf(finding)
console.log(indexOfUse);  // means I am finding = dog from the line array and it show me the position of the finding (dog) items.


// Using of String.prototype.lastIndexOf()


const newLine = 'Amin waiting for someone maybe I think the someone is a girl';
const looking = 'Amin';

const useOf = newLine.lastIndexOf(looking);
console.log("this is show ",useOf);


// Use Of String.prototype.replace()

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));


//////Use of  String.prototype.trim()
//////The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const useTream = '      soon i will be able to buy anything whatever I want    ';

console.log(useTream.trim());
console.log(useTream);



// ------------- END OF STRING -----------------------//