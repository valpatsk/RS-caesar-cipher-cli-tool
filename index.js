let parseArgs = require('minimist');
let argv = parseArgs(process.argv.slice(2));
console.log(process.argv);
console.log(process.argv.slice(2));
console.log(argv.a);