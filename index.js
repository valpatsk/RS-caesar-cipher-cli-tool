//check all arguments and put into Args:
//shift and action, and 2 stream_in, stream_out streams ready to go
let Args= require('./args_check.js');

//get teh transform class class and make transform stream object
const transformStream = require('./transform_stream.js');
let transformStreamObj = new transformStream({'shift': Args.shift, 'action': Args.action,'decodeStrings':false});

const { pipeline } = require('stream');

pipeline(
    Args.stream_in.setEncoding('utf8'),
    transformStreamObj,
    Args.stream_out,
    (err) => {
        if (err) {
            console.error(Args.action.toUpperCase() +' failed. ('+err.message+')');
        } else {
            console.log(Args.action.toUpperCase() +' succeeded.');
        }
    }
);

/*
Args.stream_in
    .pipe(transformStreamObj)
    .pipe(Args.stream_out)
    .on('finish', function () { 
        console.log('Finished.');
    }).on('error', function (err) { 
        console.log(err);
    });
*/
//process.stderr and process.stdout

