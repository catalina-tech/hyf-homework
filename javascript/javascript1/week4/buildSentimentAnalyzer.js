//A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.

//Fx the sentence `I am mega super awesome happy" Should have a high score The sentence "I hate doing boring stuff" should have a low score.

//Create a function that takes a string as a parameter. calling the function will return an object with score, positiveWords and negativeWords. You decide how the score should be implemented and what words are negative and positive.

//Here is an example of using the function:

let positiveWords = [
    "beautiful",
    "funny",
    "smart",
    "capable",
    "perseverant",
    "awesome"];

let negativeWords = [
    "boring",
    "dislike",
    "sad",
    "scary",
    "apathy",
    "cruel",
];

let sentiments = [];

function getSentimentScore(sentence,positiveWords,negativeWords){

if(positiveWords.some(word => sentence.includes(word))){
    sentiments.push({
        score: 10,
        positiveWords: positiveWords.filter(word => sentence.includes(word)),
        negativeWords: [],
    });
} else if (negativeWords.some(word => sentence.includes(word))){
    sentiments.push({
        score: 0,
        positiveWords: [],
        negativeWords: negativeWords.filter(word => sentence.includes(word)),
    });

    
}
return {
    
    score: positiveWords.filter(word => sentence.includes(word)).length - negativeWords.filter(word => sentence.includes(word)).length,
    negativeWords: negativeWords.filter(word => sentence.includes(word)),
    positiveWords: positiveWords.filter(word => sentence.includes(word)),
  };
}


const phrase = 'I find the movie funny and awesome, but it was also a bit boring and sad.';
const sentimentScore = getSentimentScore(phrase.toLowerCase(), positiveWords, negativeWords);
console.log(sentimentScore); 

//const sentimentScoreObject2 = getSentimentScore('I am mega super awesome happy');
//console.log(sentimentScoreObject); 


// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);


/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/



