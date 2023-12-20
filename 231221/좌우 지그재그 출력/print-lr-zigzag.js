const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 1; j <= n; j++) {
        if (i % 2 === 0) str += `${(n * i + j)} `;
        else str += `${(n * (i + 1) - j + 1)} `;
    }
    ans.push(str);
}

console.log(ans.join('\n'));