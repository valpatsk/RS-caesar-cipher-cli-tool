let Caesar = function() {

};

Caesar.prototype.encode = function(text,shift) {
    console.log('encode: '+text+', shift:'+shift);
}

Caesar.prototype.decode = function(text,shift) {
    console.log('decode: '+text+', shift:'+shift);
}

module.exports = Caesar;