const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result.txt",
  `Este es el resultado: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with task");
console.log("starting the next one");
