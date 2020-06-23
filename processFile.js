const lineByLine = require('n-readlines');

function processFile(file, cb) {
    const liner = new lineByLine(file);

    let line, lineNumber = 0;

    while (line = liner.next()) {
        try {
            line = line.toString('utf-8');
            const obj = JSON.parse(line);

            cb(obj, lineNumber++);

        } catch(err){
            console.log(`Error on ${file} line ${lineNumber}: ${err}` );
        }
    }

}

module.exports = processFile