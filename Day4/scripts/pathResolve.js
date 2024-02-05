const path = require('path');
function resolvePath(relativePath,testcase) {
    // Implementation
    console.log(`Test Case #${testcase}`)
    const pathName = path.resolve(__dirname, relativePath);
    console.log(`Resolved Path: ${pathName}`);

}

resolvePath('../project/folder/file.txt',1);
resolvePath('nonexistent-folder/file.txt',2);
