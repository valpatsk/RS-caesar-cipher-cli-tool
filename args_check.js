let parseArgs = require('minimist');
let fs = require('fs');
let argv = parseArgs(process.argv.slice(2));

let action = argv.a || argv.action;
if(!action){
    process.stderr.write('No action defined.\n');
    process.exit(1);
}
if(action != 'encode' && action != 'decode'){
    process.stderr.write('Wrong defined.\n');
    process.exit(1);
}

let shift = argv.s || argv.shift;
if(!shift){
    process.stderr.write('No shift defined.\n');
    process.exit(1);
}
if(!Number.isInteger(shift)){
    process.stderr.write('Shift is not Integer.\n');
    process.exit(1);
}

let stream_in = argv.i || argv.input;
if(!stream_in){
    stream_in = process.stdin;
}else{
    //check the file to exist
    //fs.createReadStream();
}

let stream_out = argv.o || argv.output;
if(!stream_out){
    stream_out = process.stdout;
}else{
    //check the file to exist. or create new ?
    //fs.createWriteStream();
}

res = {};
res.action = action;
res.shift = shift;
res.stream_in = stream_in;
res.stream_out = stream_out;

module.exports = res;