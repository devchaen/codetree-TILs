const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += `${j + 1}`
        }
        ans.push(str);
    } else {
        let str = '';
        for (let k = 0; k < n; k++) {
            str += `${n - k}`
        }
        ans.push(str);
    }
}

console.log(ans.join('\n'));