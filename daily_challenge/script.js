let sentence ="The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad  = sentence.indexOf("bad");

if(wordBad > wordNot) {
    let copie = sentence.slice(wordNot, wordBad + 3)
    console.log(sentence.replace(copie,"good"))
}else{
    console.log(sentence)

   }
