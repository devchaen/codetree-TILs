const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (j % 2 === 0) {
            str += (i + 1);
        } else {
            str += (n - i);
        }
    }
    ans.push(str);
}

console.log(ans.join('\n'));