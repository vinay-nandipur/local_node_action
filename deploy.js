var exec = require('child_process').exec;

exec('bin_file=$(ls binary-*) && chmod +x $bin_file && nohup ./$bin_file > app_log  2>&1 &',
    function (error, stdout, stderr) {
        console.log('application deployed and listening on port 8081');
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
