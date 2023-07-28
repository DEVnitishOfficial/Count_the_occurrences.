/*
1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/

const text = "This is nitish official is official nitish is This";
function countRepeatingWords(text){
  const individual_words = text.toLowerCase().split(" ");

  const word_mapping = new Map();
  
  for(const word of individual_words){
           const count = word_mapping.get(word) || 0;
           word_mapping.set(word,count+1)
  }
  return word_mapping
}
 const repeting_word = countRepeatingWords(text)
 console.log(repeting_word);