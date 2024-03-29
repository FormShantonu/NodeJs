## NODE INTERVIEW ##

>What is Node.js?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. 

>Why node js we use?

Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

> Node js Vs Php

1. Non-blocking, Asynchronous Architecture: Node.js uses an event-driven, non-blocking I/O model. This makes it particularly suitable for applications that require handling a large number of concurrent connections, such as real-time applications, chat applications, and streaming services. PHP traditionally follows a blocking approach, which can limit its performance in highly concurrent scenarios.
2. Single Language for Frontend and Backend: With Node.js, you can use JavaScript on both the frontend and backend, which can simplify development and maintenance for full-stack developers. This eliminates context switching between languages and allows sharing of code and libraries.
3. Performance and Scalability: Due to its non-blocking architecture, Node.js can handle a high number of concurrent connections with low memory usage. It excels in scenarios that require real-time processing and data streaming, making it a solid choice for applications that need to scale quickly and efficiently.
4. Microservices and APIs: Node.js is well-suited for building microservices architectures and creating APIs, as its lightweight nature allows for efficient communication between different components of an application.
5. Real-time Applications: Node.js is a strong contender for building real-time applications like live chats, online gaming, collaborative tools, and other applications that require instant updates and interactions.

>what is  event-driven in node js?

"Event-driven" means actions are triggered by specific events, like a user clicking a button or a sensor detecting motion. It's a way systems respond to occurrences rather than following a fixed sequence.

In JavaScript, event-driven programming is based on the concept of callbacks. A callback is a function that is passed as an argument to another function and is executed when a certain event occurs. For example, in a web application, you might have a function that is called when the user clicks a button. This function would be a callback that is executed when the "click" event occurs.


>What does the runtime environment mean in Node.js?

The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

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

>What is chrome v8 engine?

V8 is a C++ based open-source JavaScript engine developed by Google. It was originally designed for Google Chrome and Chromium-based browsers ( such as Brave ) in 2008, but it was later utilized to create Node.js for server-side coding.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs ( they all makeup runtime environment ) are provided by the browser.

V8 is known to be a JavaScript engine because it takes JavaScript code and executes it while browsing in Chrome. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs.

>How V8 compiles JavaScript code?

Compilation is the process of converting human-readable code to machine code. There are two ways to compile the code

Using an Interpreter: The interpreter scans the code line by line and converts it into byte code.
Using a Compiler: The Compiler scans the entire document and compiles it into highly optimized byte code.
The V8 engine uses both a compiler and an interpreter and follows just-in-time (JIT) compilation to speed up the execution. JIT compiling works by compiling small portions of code that are just about to be executed. This prevents long compilation time and the code being compiles is only that which is highly likely to run.


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
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/mydb";
var dotenv = require('dotenv');

dotenv.config();
void (async ()=>{
  await mongoose.connect(url, {
  uer: process.env.USER_NAME,
  password:process.env.PASSWORD
});
})();

```

### What are the core modules of Node.js? ###

Node.js has a set of core modules that are part of the platform and come with the Node.js installation. These modules can be loaded into the program by using the require function.

Syntax:
```
const module = require('module_name');
```

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


>What is Node.js Process Model?

Node. js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc. The process is a global object, an instance of EventEmitter, can be accessed from anywhere.

### Node js child process ###



There are four different ways to create a child process in Node: spawn(), fork(), exec(), and execFile()

>Basic understanding of the concept of child process:
Node.js runs in a single thread. You can, however take advantage of multiple processes.

child_process module allows to create child processes in Node.js. Those processes can easily communicate with each other using a built-in messaging system.

Here are key points to understand about child processes in Node.js:

* Spawning Processes: The child_process module in Node.js provides functions for creating and interacting with child processes. The spawn, exec, execFile, and fork functions are commonly used for this purpose.
* `spawn`: This function is used to spawn a new process and is suitable for running commands in a shell. It returns a stream (EventEmitter) that provides access to the standard input, output, and error streams of the child process.
* `exec` : This function is used to run a shell command in a subprocess. It buffers the output and provides it as a callback, making it convenient for running simpler commands.
* `fork` : This function is a special case of spawn used specifically for creating new Node.js processes. It sets up inter-process communication (IPC) automatically, allowing parent and child processes to exchange messages.
* Inter-Process Communication (IPC) : Child processes can communicate with the parent process and vice versa using a message-passing mechanism. The send method is used to send messages, and the message event is used to receive them.

>Explain the use of the spawn or fork functions from the child_process module

1. `spawn` : The spawn function is used to launch a new process with the specified command. It is suitable for scenarios where you want to run an external command in a new process and have access to its standard input, output, and error streams.

```
const { spawn } = require('child_process');
const ls = spawn('ls', ['-l']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

```
* Key Points: 
  * Provides streaming access to the standard input, output, and error of the spawned process.
  * Suitable for running commands that don't require communication with the Node.js process itself.

2. `fork` : The fork function is a special case of spawn that is specifically designed for spawning new Node.js processes. It is used when you want to run a separate Node.js script as a child process, and it sets up inter-process communication (IPC) automatically.

Parent process:
```
const { fork } = require('child_process');
const child = fork('child.js');

child.on('message', (message) => {
  console.log(`Message from child: ${message}`);
});

child.send('Hello from parent!');

```
Child process (child.js):
```
process.on('message', (message) => {
  console.log(`Message from parent: ${message}`);
});

process.send('Hello from child!');

```
* Key Points:
  * Designed for running separate Node.js scripts in child processes.
  * Sets up automatic communication channels (IPC) between the parent and child processes using the send method and the message event.

>How to listen for the error event and handle errors that may occur during the execution of a child process.

In Node.js, you can listen for the error event to handle errors that may occur during the execution of a child process. The error event is emitted when the child process cannot be spawned, or if it exits with a non-zero exit code.

```
const { spawn } = require('child_process');

// Example: Trying to spawn a non-existent command
const invalidCommand = spawn('nonexistentcommand');

// Listen for the 'error' event
invalidCommand.on('error', (err) => {
  console.error(`Error occurred: ${err.message}`);
});

// Listen for the 'exit' event
invalidCommand.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});

```

Here's a modified example that includes handling errors within the child process:
Parent process:

```
const { fork } = require('child_process');

const child = fork('child-script.js');

child.on('message', (message) => {
  if (message.error) {
    console.error(`Error in child process: ${message.error}`);
  } else {
    console.log(`Message from child: ${message.data}`);
  }
});

child.send('Hello from parent!');

```
Child process (child-script.js):

```
process.on('message', (message) => {
  try {
    // Simulate an error for demonstration purposes
    if (message === 'simulateError') {
      throw new Error('Simulated error in child process');
    }

    // Process the message or perform other tasks
    process.send({ data: `Processed: ${message}` });
  } catch (error) {
    // Send the error back to the parent process
    process.send({ error: error.message });
  }
});

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

>Read Files

The fs.readFile() method is used to read files on your computer.

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
>Creat File:

The File System module has methods for creating new files:

* fs.appendFile()
* fs.open()
* fs.writeFile()

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

```
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

```
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

>Update Files

The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()

>Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

```
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

>Rename Files

To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file:

```
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

## Cluster modules ##

>What is cluster?

Cluster module provide you the way of creating child process that run the simultaneously and share the same server port.

syntax: var cluster = require('cluster');

So basicaly if we want to distribute our incomeing threads by one server base on our server cpu capacity then we can use cluster.

for that create 3 file index.js for normal server runing, server.js for server define and cluster.js for destribute the server in multiper worker as copy of the maine one.

index.js :

server.js :

```

```
cluster.js :

## HTTP Module ##

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

To include the HTTP module, use the require() method:

```
var http = require('http');
```

Node.js as a Web Server :

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server:

```
var http = require('http');
// create a server object

http.createServer(function(req,res){
  res.write('Hello world');
  res.end();
}).listen(3000);
```

Save the code above in a file called "demo_http.js", and initiate the file:

```
C:\Users\Your Name>node demo_http.js
```

Add an HTTP Header :

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

```
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Contain-type':'text/html'});
  res.write('Hello World');
  res.end();
});

```

Read the Query String :

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

>HTTP module call third party api with GET request :

The http module is a built-in module in Node.js that allows you to make HTTP requests and build HTTP servers.

Here is an example of how to make a GET request using the http module:

```
var http = require('http');

http.get('http://api.example.com',(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
        console.log(Json.parse(data));
    });
}).on('error',(error)=>{
    console.log(error);
});
```

>How to make a POST request using the http module ?

```
var http = require('http');

var option = {
    method:"POST",
    header: {"Content-type":"application/json"}
}

const req =  http.request('http://api.example.com',option,(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    
    res.on('end',()=>{
        console.log(JSON.parse(data));
    })
});

var postData = JSON.stringify({
    name:'shantonu',
    email:'chowdhury.shan@gmail.com'
});

req.write(postData);
req.end();
```

To send data in the POST request, we use the .write() method to write the data to the request stream and then call .end() to complete the request. In this example, we're sending JSON data in the request body.

### URL Module ###

The Built-in URL Module :

The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:

```
var url = require('url');
```
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

```
var url = require('url');
var adr = 'http://localhost:3000/default.htm?year=2022&month=06';
var parseData = url.parse(adr);

console.log(parseData.host);

console.log(parseData.pathname)

console.log(parseData.search);

var qdata = q.query; // return object {year:2022, month:06}
console.log(qdata); //  return 06
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

### Node.js Events ###

>What is Event in node?

Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

>The EventEmitter Object

You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.

```
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = function(){
    console.log("I called event emitter");
}

// Assign event handler to event
eventEmitter.on('scream', myEventHandler);

// Call the event

eventEmitter.emit('scream');
```
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

### Node js Error Handel ###

>How we can handle error in node js?

In tradition way we handel error by try and catch mathod but in asynchonus method we have to use process.no()

```
process.on('error',function(error){
  console.log('There is an error!');
});

```

Other waise we can use the defferent module import and execute.

### Express js ###

>Explain the purpose of the ExpressJS package.

Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in server-side applications. It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

>How does an Express code look like?

The express.js program is saved with ".js" extension.

```
var express = require('express');    
var app = express();    
app.get('/', function (req, res) {    
  res.send('Welcome to JavaTpoint!');    
});    
var server = app.listen(8000, function () {    
  var host = server.address().address;    
  var port = server.address().port;    
  console.log('Example app listening at http://%s:%s', host, port);    
});
```

>Which are the arguments available to an Express JS route handler function?

Following are the arguments that are available to an Express.js route handler-function:

* Req: the request object
* Res: the response object
* Next (optional): It is a function employed to pass management to one of the above route handlers.

>In Express how many type of middleware exist?

An Express application can use the following types of middleware: 

* Application-level middleware. 

* Router-level middleware. 

* Built-in Middleware

* Error-handling middleware

* Third-party Middleware


>What is Middleware?

The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

```
const express = require('express');
const app = express;

const myLog = function(res,req,next){
  console.log('Hello My Middleware.');
  next();
}

app.use(myLog);

app.get('/',(req, res){
  console.log('Hello world!!');
});

app.listen(3000,function(req,res){
  console.log('Server runing at 3000');
})

```

Application-level middleware: The application-level middleware method is used to bind to the app object using app.use() method. It applies on all routes.

```
//This middleware will execute for each route.  
app.use(function (req, res, next) {  
  console.log('Current Time:', Date.now())  
  next()  
}) 
```

Router-level Middleware: The router-level Middleware is used to bind to a specific instance of express.Router().Built-in Middleware: The built-in Middleware was introduced with version 4.x. It ends the dependency on Connect.

There are the following built-in middleware functions in Express.js:

* static: It is used to serve static assets such as HTML files, images, etc.

* json: It is used to parse the incoming requests with JSON payloads. It is available with Express 4.16.0+

* urlencoded: It is used to parse the incoming requests with URL-encoded payloads. It is available with Express 4.16.0+

Third-party Middleware: There are many third-party middleware available such as:

* Body-parser

* Cookie-parser

* Mongoose

* Sequelize

* Cors

* Express-validator



