
const fs = require('fs').promises;

async function readFileContent(filepath,testCaseNumber) {
    try {
        const content = await fs.readFile(filepath, 'utf8');
        console.log('Test Case #',testCaseNumber)
        console.log('File Content: \n', content || '(empty string)');
    } catch (err) {
        console.log('Test Case #',testCaseNumber)
        console.error(`Error reading file: ${err.code === 'ENOENT' ? 'File not found' : err.message}`);
    }
}

readFileContent('text-files/file1.txt',1);
readFileContent('text-files/empty-file.txt',2);
readFileContent('text-files/nonexistent-file.txt',3);