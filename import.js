const processFile = require('./processFile');
const fs = require('fs');

const inPath= '/dados/ver01';

const argFile = process.argv[2];

const files = argFile ? [argFile] : fs.readdirSync(inPath).map(e => `${inPath}/${e}`);

for(const infile of files){

    if (!infile.match(/\.txt$/)) continue;

    console.log(infile);

    try {

        processFile(`${infile}`, (obj, lineNumber) => {
            if (lineNumber && lineNumber % 100000 == 0) console.log(`${infile} line ${lineNumber}`);

            // console.log(obj);
            // Processar / Inserir banco

        });


    } catch (err){
        console.log(err);

    }
}


