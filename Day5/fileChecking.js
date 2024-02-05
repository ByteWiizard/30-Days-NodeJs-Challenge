
const path = require('path');

function checkFileExtension(filePath, expectedExtension,testCase) {
    // Implementation
    console.log(`Test Case #${testCase}`)
    const extension = path.extname(filePath);

    if(extension === expectedExtension){
        console.log(`File has the expected extension: ${expectedExtension}`);
    }else{
        console.log(`File does not have the expected extension.Expected: ${expectedExtension}, Actual: ${extension}`);
    }
}

checkFileExtension('test-files/file1.txt', '.txt',1);
checkFileExtension('test-files/image.png', '.jpg',2);