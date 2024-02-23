const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n').map(str => str.replace(/\r/g, ''));

const [n, ...sentence] = input;

const solution = (n, sentence) =>{
    for(let i = 0; i < n; i++){
        const words = sentence[i].split(' ');

        let answer = '';
        for(let word of words){
            if(word.length === 1){
                answer += `${word} `
            }else{
                answer += `${word.split('').reverse().join('')} `;
            }
        }
        console.log(answer)
    }
}

solution(n,sentence);