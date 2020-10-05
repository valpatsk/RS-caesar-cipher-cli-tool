const { Transform } = require('stream');
const Caesar = require('./caesar.js');

class transformStream extends Transform {
    constructor(options) {
        super(options);
        this.shift = options.shift;
        this.action = options.action;
    }
    _transform(chunk, encoding, callback) {
        try {
            //the encode/decode module
            const caesarObj = new Caesar();
            let resultString;
            if(this.action == 'encode'){
                resultString = caesarObj.encode(chunk,this.shift);
            }
            if(this.action == 'decode'){
                resultString = caesarObj.decode(chunk,this.shift);
            }
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}





module.exports = transformStream;