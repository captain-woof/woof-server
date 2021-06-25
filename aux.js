exports.getCurrentDate = () => {
    var date = new Date();
    var dayOfMonth = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${dayOfMonth}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

exports.printHelp = () => {
    console.log("Usage: node main.js listen-ip listen-port upload-dir download-dir");
    console.log("Defaults are -> 127.0.0.1 80 ./ ./");
    console.log("Written by CaptainWoof");
}

exports.getStatus = (host,port,download_dir,upload_dir) => {
    return `Download directory: ${download_dir} (GET /filename)\nUpload directory: ${upload_dir} (POST /)\nWoof server listening on ${host}:${port}...\n`;
}

exports.getStatusHtml = (host,port,download_dir,upload_dir) => {
    return `<html><head><title>Woof Server</title></head><body>Download directory: ${download_dir} (GET /filename)<br/>Upload directory: ${upload_dir} (POST "file" /)<br/>Woof server listening on ${host}:${port}...<br/></body></html>`;
}
