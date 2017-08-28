var zigZagString = function(word, nRows) {
    let temp = "";
    let isOdd = (nRows % 2) == 1;
    const centerRow = isOdd? Math.floor(nRows/2) : -1 ;
    let count = 0;
    const wordLength = word.length;

    for (let i = 0; i < nRows; i++) {
        if (i !== centerRow){
            for (let j = i ; j < wordLength ; j += isOdd? (nRows + 1): nRows) { 
                temp += word.charAt(j);
            }
        } else {
            for (let j = i ; j < wordLength ; j += (Math.floor(nRows/2) + 1)) { 
                temp += word.charAt(j);
            }
        }
    }
    return temp;
};
/**
 *             123n123n123n123 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

->>>>>> TO MY UNDERSTANDING <<<<<<-
I thought it was to make it always have that zipper thing where it will always try to make the middle
row the longest 
so 
zigzag(ABCDE , 4)

is 

AE     
B
C
D
 */