function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="We went down to the stall, then down to down the river."; 
 var count= console.log(countOccurences(text,"the"))