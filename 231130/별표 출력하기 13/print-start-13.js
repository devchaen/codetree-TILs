const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let ans = []

for (let i = 0; i < 2 * n; i++) {
    let str = '';
    if (i % 2 === 0) {
        for (let j = 0; j < n - (i / 2); j++) {
            str += '* ';
        }
    } else {
        for (let k = 0; k < (i + 1)/2; k++) {
            str += '* ';
        }
    }
    ans.push(str);
}

console.log(ans.join('\n'));