'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
   function sumofdig(value){
       // console.log(value,"inside")
        let sum=0
        for(let i of value){
            sum+=parseInt(i)
        }
        //console.log(sum,"sum")
        return sum
    }
    if(n<10){
        return n
    }
    let s=""+n
   
    let c=0
        while(s.length>=2){
            //console.log(s)
           
            c++
            s=sumofdig(s)
            s=String(s)
             if(c==1){
                s=parseInt(s)*k;
                s=String(s);
            }
           // console.log(s)
            
        }
    return s
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
