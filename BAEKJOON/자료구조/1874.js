const fs = require('fs');
const input = fs
    .readFileSync('example.txt')
    .toString()
    .trim()
    .split('\n')
    .map((str) => +str);
const [n, ..._input] = input;

const solution = (n, input) => {
    let current = 0;
    const _array = [];
    for (let i = 1; i <= n; i++) {
        if (true) {
            _array.pop();
        } else {
            _array.push(i);
            console.log('+');
        }
    }
};

solution(n, _input);
