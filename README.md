# RS-caesar-cipher-cli-tool

RS-School Task #1

How to run:

1. All files are in RS-caesar-cipher-cli-tool folder.
2. From console run: >node index.js [args]
3. Possible arguments:
   1. -a or --action "encode" or "decode". Required. The direction of transform process.
   2. -s or --shift. Required. Only Int. Can be negative (it will change the direction of transform process too).
   3. -i or --input. Optional. The file with text to encode/deocde.
   4. -o or --optout. Optional. The file to save the encoded/decoded result. The result will be appended to existing file.

Possible examples:

node index -a encode --shift=-1 -i ./tests/in.txt -o ./tests/out.txt

node index -a encode --shift=52

node index -a decode -s 1111 --input ./tests/in.txt

How to install:

1. Clone the project from github.
2. In root folder of the project run in console: >npm install
3. Enjoy :)
