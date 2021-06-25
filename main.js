// Import modules
var express = require('express');
var formidable = require('formidable');
var fs = require('fs');
var aux = require('./aux');

var app = express();

// ROUTES
// Download
app.get("/:fileToDownload",(req,res)=>{    
    var fileToDownload = req.params['fileToDownload'];
    var fileToDownloadFullPath = download_dir + "/" + fileToDownload;
    if(fileToDownload.length == 0){ // If homepage requested
        res.write(aux.getStatusHtml());
        return res.end();
    }else{ // Serve the file
        res.download(fileToDownloadFullPath,(err) => {
            if(err){
                console.log(`${aux.getCurrentDate()} - ERROR while ${req.hostname} attempted to download '${fileToDownload}'`);
                res.write(`Error in retrieving ${fileToDownload} from server!\n`);
            }else{
                console.log(`${aux.getCurrentDate()} - ${req.hostname} downloaded '${fileToDownload}'`);
            }
            return res.end();
        })
    }   
});

// Upload
app.post("/",(req,res) => {
    var uploadForm = new formidable.IncomingForm();
    uploadForm.parse(req);
    uploadForm.on("file",(formName,file) => {
        fs.rename(file.path,upload_dir+"/"+file.name,(err) => {
            if(err){
                console.log(`${aux.getCurrentDate()} - ERROR while ${req.hostname} attempted to upload '${file.name}'`);
                res.write(`Error in uploading ${file.name} to server!\n`);
            }else{
                console.log(`${aux.getCurrentDate()} - ${req.hostname} uploaded '${file.name}'`);
                res.write(`'${file.name}' successfully uploaded!`);
            }
            return res.end();
        })
    });
});

// MAIN CODE
var args = process.argv.slice(2);
if(args.includes("-h")){
    // Print help
    aux.printHelp();
}else{
    try {
        // Parse and listen
        args.reverse();
        var host = args.pop() || "127.0.0.1";
        var port = parseInt(args.pop()) || 80;
        var upload_dir = args.pop() || process.cwd();
        var download_dir = args.pop() || process.cwd();
        
        app.listen(port,host,() => {
            console.log(aux.getStatus(host,port,download_dir,upload_dir));
        });
    }catch(error){
        console.log(error);
        aux.printHelp();
    }
}