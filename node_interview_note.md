## NODE INTERVIEW ##


>What is Node.js?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. 

>What does the runtime environment mean in Node.js?

The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

>What is Node.js Process Model?

Node.js runs in a single process and the application code runs in a single thread and thereby needs fewer resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.

>Single Threaded Event Loop Model Processing Steps

Clients Send request to Web Server.
* Node.js Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node.js Web Server receives those requests and places them into a Queue. It is known as Event Queue.
* Node.js Web Server internally has a Component, known as Event Loop. Why it got this name is that it uses indefinite loop to receive requests and process them.
Event Loop uses Single Thread only. It is main heart of Node.js Platform Processing Model.
Event Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
If yes, then pick up one Client Request from Event Queue
Starts process that Client Request
If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
Checks Threads availability from Internal Thread Pool
Picks up one Thread and assign this Client Request to that thread.
That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
Event Loop in turn, sends that Response to the respective Client.

>How to create a simple server in Node.js that returns Hello World?

Step 01: Create a project directory
    mkdir myapp
    cd myapp
Step 02: Initialize project and link it to npm
    npm init
    This creates a package.json file in your myapp folder. The file contains references for all npm packages you have downloaded to your project. The command will prompt you to enter a number of things. You can enter your way through all of them EXCEPT this one:
    entry point: (index.js)
    Rename this to: app.js
Step 03: Install Express in the myapp directory
    npm install express --save
Step 04: app.js (set the local server)
```
    var express = require('express');
    var app = express();
    app.get('/', function (req, res) {
    res.send('Hello World!');
    });
    app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });
```
Step 05: Run the app
    node app.js

>Create Database:

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
```

>Differentiate between spawn and fork methods in Nodejs?

spawn() It creates a new process through a command rather than running on the same node process.

fork() It makes several individual processes (child processes) but all of them run on the same node process as the parent.

>Explain the purpose of the ExpressJS package.

Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in server-side applications. It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

### Node js child process ###

Node.js runs in a single thread. You can, however take advantage of multiple processes.

child_process module allows to create child processes in Node.js. Those processes can easily communicate with each other using a built-in messaging system.

There are four different ways to create a child process in Node: spawn(), fork(), exec(), and execFile()

>spawn launches a command in a new process:

```
const { spawn } = require('child_process')

const child = spawn('ls', ['-a', '-l']);
```
You can pass arguments to the command executed by the spawn as array using its second argument.

spawn returns a ChildProcess object. As ChildProcess inherits from EventEmitter you can register handlers for events on it.
```
child.on('exit', code => {
  console.log(`Exit code is: ${code}`);
});
```
Apart from exit event, there are also disconnect, error, close and message events.

message event allows for the caller/parent to communicate with the child process. This event is emitted when child process uses process.send().

Child processes have three standard IO streams available: stdin (writeable), stdout (readable) and stderr (readable). Streams also inherit from EventEmitter. On readable streams there is data event emitted when a commands run inside a child process outputs something.
```
// Async Iteration available since Node 10
for await (const data of child.stdout) {
  console.log(`stdout from the child: ${data}`);
};
```

Since stdin of the main process is a readable stream, you can pipe it into the stdin of the child process (which is a writeable stream).

```
const { spawn } = require('child_process')

const child = spawn('wc');

process.stdin.pipe(child.stdin)

for await (const data of child.stdout) {
  console.log(`stdout from the child: ${data}`);
};
```

You can also pass the output of one child process as the input to the another child process.

```
const { spawn } = require('child_process')

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

for await (const data of wc.stdout) {
  console.log(`number of files: ${data}`);
};
```

spawn doesn't create a shell to execute the command while exec does create a shell. Thus, it's possible to specify the command to execute using the shell syntax. exec also buffers the command's entire output instead of using a stream.

```
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
  const { stdout, stderr } = await exec('find . -type f | wc -l');

  if (stderr) {
    console.error(`error: ${stderr}`);
  }
  console.log(`Number of files ${stdout}`);
}

main()
```

You can force spawn to create a shell using shell: true option.

```
const { stdout, stderr } = await exec('find . -type f | wc -l', { shell: true });
```
spawn can also directly use IO streams of the parent/caller by specifying stdio: inherit option. This way the output from the script will be displayed immediately.

You can specify a directory to use for the command being executed by spawn using cwd option.

You can also pass shell variables to the child process using env option. The child process won't have access to environment variables of parent/caller.

```
const child = spawn('echo $PYTHON_PYTH', {
  env: { PYTHON_PATH: '/usr/bin/python' },
});
```

fork is a variation of spawn where both the parent/caller and the child process can communicate with each other via send().

Thanks to fork, computation intensive tasks can be separated from the main event loop.

In the example below, the server won't be blocked by the computation intensive task triggered by /compute route. The task will be handled by another Node process. Once it finished, the result will be send back to the server so that it can be then returned over HTTP as a response.

```
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};

process.on('message', message => {
  const result = longComputation();
  process.send(result);
});
```

```
const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (request, response) => {
  if (request.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');

    compute.on('message', result => {
      res.end(`Long computation result: ${result}`)
    });
  } else {
    res.end('Route not found')
  }
});

server.listen(3000);
```
### What are the core modules of Node.js? ###

Node.js has a set of core modules that are part of the platform and come with the Node.js installation. These modules can be loaded into the program by using the require function.

Syntax:
```
const module = require('module_name');
```

>The following table lists some of the important core modules in Node.js.

| Name | Description |
| ---- |:-----------:|
| Assert| It is used by Node.js for testing itself. It can be accessed with require('assert'). |
| Buffer| It is used to perform operations on raw bytes of data which reside in memory. It can be accessed with require('buffer') |
| Child Process | It is used by node.js for managing child processes. It can be accessed with require('child_process'). |
| Cluster | This module is used by Node.js to take advantage of multi-core systems, so that it can handle more load. It can be accessed with require('cluster'). |
| Console | It is used to write data to console. Node.js has a Console object which contains functions to write data to console. It can be accessed with require('console'). |
| Crypto | It is used to support cryptography for encryption and decryption. It can be accessed with require('crypto'). |
| HTTP | It includes classes, methods and events to create Node.js http server. |
| URL | It includes methods for URL resolution and parsing. |
| Query String | It includes methods to deal with query string. |
| Path | It includes methods to deal with file paths. |
| File System | It includes classes, methods, and events to work with file I/O. |
| Util | It includes utility functions useful for programmers. |
| Zlib | It is used to compress and decompress data. It can be accessed with require('zlib'). |

>Explain Buffer data type in Node.js?

Node.js includes an additional data type called Buffer ( not available in browser's JavaScript ). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.

Example:

```
/**
 * Buffer Data Type
 */
let b = new Buffer(10000);
let str = "----------";

b.write(str); 
console.log( str.length ); // 10
console.log( b.length ); // 10000
```
>What is chrome v8 engine?

V8 is a C++ based open-source JavaScript engine developed by Google. It was originally designed for Google Chrome and Chromium-based browsers ( such as Brave ) in 2008, but it was later utilized to create Node.js for server-side coding.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs ( they all makeup runtime environment ) are provided by the browser.

V8 is known to be a JavaScript engine because it takes JavaScript code and executes it while browsing in Chrome. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs.

>How V8 compiles JavaScript code?

Compilation is the process of converting human-readable code to machine code. There are two ways to compile the code

Using an Interpreter: The interpreter scans the code line by line and converts it into byte code.
Using a Compiler: The Compiler scans the entire document and compiles it into highly optimized byte code.
The V8 engine uses both a compiler and an interpreter and follows just-in-time (JIT) compilation to speed up the execution. JIT compiling works by compiling small portions of code that are just about to be executed. This prevents long compilation time and the code being compiles is only that which is highly likely to run.

>What are the global objects of Node.js?

Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.

These objects are modules, functions, strings and object itself as explained below.

1. global:

It is a global namespace. Defining a variable within this namespace makes it globally accessible.

```
var myvar;
```

2. process:

It is an inbuilt global object that is an instance of EventEmitter used to get information on current process. It can also be accessed using require() explicitly.

3. console:

It is an inbuilt global object used to print to stdout and stderr.

```
console.log("Hello World"); // Hello World

```
4. setTimeout(), clearTimeout(), setInterval(), clearInterval():

The built-in timer functions are globals

```
function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var timeoutObj = setTimeout(printHello, 2000);
```
5. __dirname:

It is a string. It specifies the name of the directory that currently contains the code.
```
console.log(__dirname);
```
6. __filename:
It specifies the filename of the code being executed. This is the resolved absolute path of this code file. The value inside a module is the path to that module file.

```
console.log(__filename);
```

### NODE.JS FILE SYSTEM ###

>How Node.js read the content of a file?

The "normal" way in Node.js is probably to read in the content of a file in a non-blocking, asynchronous way. That is, to tell Node to read in the file, and then to get a callback when the file-reading has been finished. That would allow us to handle several requests in parallel.

Common use for the File System module:

Read files
* Create files
* Update files
* Delete files
* Rename files

Example: Read Files
```
<!-- index.html -->
<html>
<body>
  <h1>File Header</h1>
  <p>File Paragraph.</p>
</body>
</html>
```
```
/**
 * read_file.js
 */
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
```
>How many types of streams are present in node.js?

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. There are four types of streams

* Readable − Stream which is used for read operation.
* Writable − Stream which is used for write operation.
* Duplex − Stream which can be used for both read and write operation.
* Transform − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.

Methods:

* data − This event is fired when there is data is available to read.
* end − This event is fired when there is no more data to read.
* error − This event is fired when there is any error receiving or writing data.
* finish − This event is fired when all the data has been flushed to underlying system.

>1. Reading from a Stream:

```
const fs = require("fs");
let data = "";

// Create a readable stream
const readerStream = fs.createReadStream("file.txt");

// Set the encoding to be utf8.
readerStream.setEncoding("UTF8");

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});
```
>2. Writing to a Stream:
```
const fs = require("fs");
const data = "File writing to a stream example";

// Create a writable stream
const writerStream = fs.createWriteStream("file.txt");

// Write the data to stream with encoding to be utf8
writerStream.write(data, "UTF8");

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on("finish", function () {
  console.log("Write completed.");
});

writerStream.on("error", function (err) {
  console.log(err.stack);
});
```
>3. Piping the Streams:

Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.

```
const fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream('input.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
```
>4. Chaining the Streams:

Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.
```
const fs = require("fs");
const zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");
```

>How to handle large data in Node.js?

The Node.js stream feature makes it possible to process large data continuously in smaller chunks without keeping it all in memory. One benefit of using streams is that it saves time, since you don't have to wait for all the data to load before you start processing. This also makes the process less memory-intensive.

Some of the use cases of Node.js streams include:
* Reading a file that's larger than the free memory space, because it's broken into smaller chunks and processed by streams. For example, a browser processes videos from streaming platforms like Netflix in small chunks, making it possible to watch videos immediately without having to download them all at once.
* Reading large log files and writing selected parts directly to another file without downloading the source file. For example, you can go through traffic records spanning multiple years to extract the busiest day in a given year and save that data to a new file.

### NODE.JS RESTFUL API ###

>Explain RESTful Web Services in Node.js?

REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It is an architectural style as well as an approach for communications purposes that is often used in various web services development. A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol.

HTTP methods:
* `GET` − Provides read-only access to a resource.
* `PUT` − Updates an existing resource or creates a new resource.
* `DELETE` − Removes a resource.
* `POST` − Creates a new resource.
* `PATCH`− Update/modify a resource

Example: users.json
```
{
   "user1" : {
      "id": 1,
      "name" : "Ehsan Philip",
      "age" : 24
   },

   "user2" : {
      "id": 2,
      "name" : "Karim Jimenez",
      "age" : 22
   },

   "user3" : {
      "id": 3,
      "name" : "Giacomo Weir",
      "age" : 18
   }
}
```

List Users ( GET method)

Let's implement our first RESTful API listUsers using the following code in a server.js file −

```
  const express = require('express');
  const app = express();
  const fs = require('fs');

  app.get('/user-list',function(req,res){
    fs.readFile(_dirname+"/"+"users.json","utf8",function(err,data){
      console.log(data);
      res.end(data);
    })
  });

  const server = app.listen(3000,function(){
    const Host = server.address().host;
    const Port = server.address().port;
    console.log(`Server running on host ${Host} and port ${Port}`);
  });
```

Add User ( POST method )

Following API will show you how to add new user in the list.

```
const express = require('express');
const app = express();
const fs = require('fs');

post('/add-user', function(req,res){
  fs.readFile(_dirname+"/users.json","utf8",function(err,data){
    const data = JSON.parse(data);
    data['user4'] = req.body;
    req.end(JSON.stringify(data));
  });
});

```

>What is the difference between req.params and req.query?

The req.params are a part of a path in URL and they're also known as URL variables. for example, if you have the route /books/:id, then the id property will be available as req.params.id. req.params default value is an empty object {}.

A req.query is a part of a URL that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form. A query is the last part of URL

Example 01: req.params
```
  /**
 * req.params
 */

// GET  http://localhost:3000/employees/10

app.get('/employees/:id', (req, res, next) => {
   console.log(req.params.id); // 10
})
```

Example 02: req.query

```
/**
 * req.query
*/

// GET  http://localhost:3000/employees?page=20

app.get('/employees', (req, res, next) => {
  console.log(req.query.page) // 20
})

```




