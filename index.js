let Args= require('./args_check.js');



let Caesar = require('./caesar.js');
const { stream_in } = require('./args_check.js');
let caesarObj = new Caesar();


Args.stream_in.pipe(Args.stream_out);

//process.stderr and process.stdout