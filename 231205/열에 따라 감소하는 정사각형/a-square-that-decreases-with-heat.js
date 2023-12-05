const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];
for (let i = 0; i < n; i++) {
    let str = '';
    for(let j = n; j > 0; j--) {
        str += `${j} `;
    }
    ans.push(str);
}

console.log(ans.join('\n'));