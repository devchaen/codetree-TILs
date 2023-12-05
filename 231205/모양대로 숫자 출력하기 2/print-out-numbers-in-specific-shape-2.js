const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let ans = [];
let cnt = 1;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += `${cnt * 2} `
        cnt++;
        if (cnt === 5) cnt = 1;
    }
    ans.push(str);
}
console.log(ans.join('\n'));