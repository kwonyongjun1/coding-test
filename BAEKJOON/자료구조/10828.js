const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n').map(str => str.replace(/\r/g, ''));
//const inputData = fs.readFileSync('example.txt').toString().split(' ').map(value => +value); Number로 반환하고싶을때
//const inputData = fs.readFileSynce('/dev/stdin').toString().split(' ').map(value => +value);



const [n, ...commands] = input;

const solution = (n, commands) =>{
    
    const stack = [];
    let answer = '';

    for(let i = 0; i < n; i++){

        let result = '';
        const command = commands[i].split(' ')[0];
        switch(command){
            case 'push':
                const item = commands[i].split(' ')[1];
                stack.push(item);
                break;
            case 'pop':
                result = !!stack.length ? stack.pop() : -1; 
                answer += result + ' ';
                break;
            case 'top':
                result = !!stack.length ? stack[stack.length-1] : -1;
                answer += result + ' ';
                break;
            case 'empty':
                result = !!stack.length ? 0 : 1;
                answer += result + ' ';
                break;
            case 'size':
                result = !!stack.length ? stack.length : 0;
                answer += result + ' ';
                break;
            default:
                break;
        }
    }

    console.log(answer.split(' ').join('\n'));
}

solution(n, commands);