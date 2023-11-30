const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1) {
            str += '* ';
        } 
        else if (j % 2 === 0 && i <= j) {
            str += '* ';
        }
        else {
            str += '  ';
        }
    }
    console.log(str);
}