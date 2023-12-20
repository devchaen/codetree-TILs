const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        if (i === 0) str += `${j} `;
        else if (i % 2 === 0) str += `${(n * (i + parseInt(i / 2))) + j} `;
        else str += `${(n * (i + parseInt(i / 2))) + (2 * j)} `;
    }
    ans.push(str);
}

console.log(ans.join('\n'));