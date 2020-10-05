let parseArgs = require('minimist');
let fs = require('fs');
let argv = parseArgs(process.argv.slice(2));

let action = argv.a || argv.action;
if(!action){
    console.error('No action defined.');
    process.exit(1);
}
if(action != 'encode' && action != 'decode'){
    console.error('Wrong action defined.');
    process.exit(1);
}

let shift = argv.s || argv.shift;
if(!shift){
    console.error('No shift defined.');
    process.exit(1);
}
if(!Number.isInteger(shift)){
    console.error('Shift is not Integer.');
    process.exit(1);
}

let stream_in_path = argv.i || argv.input;

if(!stream_in_path || typeof stream_in_path !== 'string'){
    stream_in = process.stdin;
}else{
    try {
        if(fs.lstatSync(stream_in_path).isDirectory()){
            console.error(`${stream_in_path} is Directory.`);
            process.exit(1);
        }
        fs.accessSync(stream_in_path, fs.constants.F_OK | fs.constants.R_OK);
        stream_in = fs.createReadStream(stream_in_path);
    } catch (err) {
        console.error(`${stream_in_path} ${err.code === 'ENOENT' ? 'does not exist' : 'is not readable'}`);
        process.exit(1);
    }
}

let stream_out_path = argv.o || argv.output;
if(!stream_out_path || typeof stream_out_path !== 'string'){
    stream_out = process.stdout;
}else{
    try {
        if(fs.lstatSync(stream_out_path).isDirectory()){
            console.error(`${stream_out_path} is Directory.`);
            process.exit(1);
        }
        fs.accessSync(stream_out_path, fs.constants.F_OK | fs.constants.W_OK);
        stream_out = fs.createWriteStream(stream_out_path,{encoding:'utf8',flags:'a'});
    } catch (err) {
        console.error(`${stream_out_path} ${err.code === 'ENOENT' ? 'does not exist' : 'is not writable'}`);
        process.exit(1);
    }
}

res = {};
res.action = action;
res.shift = shift;
res.stream_in = stream_in;
res.stream_out = stream_out;

module.exports = res;