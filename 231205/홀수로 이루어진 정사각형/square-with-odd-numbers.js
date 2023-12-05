const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];
for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        str += `${(2 * i + 10) + (2 * j - 1)} `;
    }
    ans.push(str);
}

console.log(ans.join('\n'));