const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = n; j >= 1; j--) {
        str += `${i * j} `;
    }
    ans.push(str);
}
console.log(ans.join('\n'));