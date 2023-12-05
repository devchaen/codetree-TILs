const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let ans = [];
for(let i = 1; i <= a; i++) {
    let str = '';
    for (let j = 1; j <= b; j++) {
        str += `${i * j} `;
    }
    ans.push(str);
}
console.log(ans.join('\n'));