const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { unescape } = require('querystring');
const hostName = '127.0.0.1';
const port = 5000;
const mineTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/js',
    'png': 'text/png',
    'jpeg': 'text/jpeg',
    'jpg': 'text/jpg',
};
http.createServer((req, res) => {
    const myUri = url.parse(req.url).pathname;
    const fileName = path.join(process.cwd(), unescape(url));
    console.log(`File you'r looking for it : ${fileName}`);
    let loadFile;
    try {
        loadFile = fs.lstatSync(fileName);
    } catch (error) {
        res.writeHead(404, { 'Contain-Type': 'plain-text' });
        res.write('404 Page not found.');
        res.end();
        return;
    }
    if (loadFile.isFile()) {
        let mineTypes = mineTypes[path.extname[loadFile].split('.').reverse()[0]];
        res.writeHead(200, { "Contain-Type": mineTypes });
        let fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res)
    } else if (loadFile.isDirectory()) {
        res.writeHead(302, { Location: 'index.html' });
        res.end();
    } else {
        res.writeHead(500, { 'Contain-Type': 'plain-text' });
        res.write('500 internal serve error.');
        res.end();
    }
}
).listen(port, hostName, () => {
    console.log(`Server listen on port ${port}`);
});