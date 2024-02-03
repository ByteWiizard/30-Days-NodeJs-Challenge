const {exec} = require('child_process')
function executeCommand(command,testCase){
    
    exec(command, (error, stdout, stderr) => {
        

        console.log(`testCase #`, testCase);
        if(error){
            console.log(`error: ${error.message}`);
            return;
        }
        else if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }else{
            console.log(`Command Output:\n${stdout}`);
        }
    })
}
executeCommand('ls -la',1);
executeCommand('echo "Hello, Node.js!"',2);
