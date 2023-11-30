const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if(i === 0 || j === 0 || i === n - 1 || j === n - 1) {
            str += '* ';
        }
        else if (i > 1 && j < i) {
            str += '* ';
        }
        else {
            str += '  ';
        }
    }
    console.log(str);
}