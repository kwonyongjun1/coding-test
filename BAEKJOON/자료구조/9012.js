const fs = require('fs');
const input = fs
    .readFileSync('example.txt')
    .toString()
    .trim()
    .split('\n')
    .map((str) => str.replace(/\r/g, ''));

const [n, ..._input] = input;

const solution = (n, input) => {
    for (let i = 0; i < n; i++) {
        let ps = input[i].split('');
        let left = 0,
            right = 0;
        for (const p of ps) {
            if (p === '(') {
                left++;
            } else {
                right++;
                if (left < right) break;
            }
        }
        left === right ? console.log('YES') : console.log('NO');
    }
};

solution(n, _input);
