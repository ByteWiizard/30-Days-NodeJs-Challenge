
const fs = require('fs')
const path = require('path')


const writeToFile = (filePath, content, testcaseNumber) => {

    let FileName = path.basename(filePath);

    fs.writeFile(filePath, content, (err) => {

        console.log(`TestCase #${testcaseNumber}:`);
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`Error writing to file: ${err.message}`);
            } else {
                console.error(err);
            }
            return;
        } else {
            console.log(`Data written to ${FileName}`);
        }
    })
}



writeToFile('./test-files/output1.txt', 'Sample content.',1);
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.',2);