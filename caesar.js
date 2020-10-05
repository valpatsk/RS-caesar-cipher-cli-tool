class Caesar {
    constructor(){
        //тупо и громоздко
        this.symbols="abcdefdhijklmnopqrstuvwxyz";
    }
    encode(text,shift){
        return this.shift(text, shift);
    }
    decode(text,shift){
        return this.shift(text,-1*shift);
    }
    shift(text, shift){
        let real_shift = shift % this.symbols.length;
        let result = "";
        for(var i=0; i < text.length; i++){
            let isCapital = text[i] == text[i].toUpperCase();
            if(this.symbols.includes(text[i].toLowerCase())){
                if(this.symbols.indexOf(text[i].toLowerCase()) + real_shift < 0){
                    var this_shift = real_shift + this.symbols.length;
                }else if(this.symbols.indexOf(text[i].toLowerCase()) + real_shift > this.symbols.length-1){
                    var this_shift = real_shift - this.symbols.length;
                }else{
                    this_shift = real_shift;
                }
                var symbol = this.symbols[this.symbols.indexOf(text[i].toLowerCase()) + this_shift];
                if(isCapital){
                    symbol=symbol.toUpperCase();
                }
                result+=symbol;
            }else{
                result+=text[i];
            }
        }
        return result;
    }
}


module.exports = Caesar;