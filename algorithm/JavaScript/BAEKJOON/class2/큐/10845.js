function solution() {
  const fs = require("fs");
  const input = fs.readFileSync("input.txt").toString().split("\n");

  const len = input[0];
  const queue = [];
  const answer = [];

  const cmdObj = {
    push: (x) => {
      queue.push(x);
    },
    pop: () => {
      return queue.length === 0 ? -1 : queue.shift();
    },
    size: () => {
      return queue.length;
    },
    empty: () => {
      return queue.length === 0 ? 1 : 0;
    },
    front: () => {
      return queue.length === 0 ? -1 : queue[0];
    },
    back: () => {
      return queue.length === 0 ? -1 : queue[queue.length - 1];
    },
  };

  for (let i = 1; i <= len; i++) {
    const [cmd, num] = input[i].trim().split(/\s/g);

    if (cmd === "push") cmdObj.push(parseInt(num));
    else answer.push(cmdObj[cmd]());
  }
  console.log(answer.join("\n"));
}
solution();
