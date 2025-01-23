## NODE INTERVIEW ##

> What is Node.js?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. 

> Why node js we use?

Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that is lightweight and efficient, perfect for data-intensive real-time applications running across distributed devices.

>What Disadvantage of node js?

When we require some CUP processing task like video editing application, this type of application singel threads can't perfrom well so for node js we avoid it.

> What does the runtime environment mean in Node.js?

The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

> What is the defference between runtime environment and framework?

* Runtime env primarily focusing on nasesary infrastructure for code execution.
* framework are provide a development env for inbuild coding structure, libraries which will hapl developer productivity.

> Node js Vs Php

1. Non-blocking, Asynchronous Architecture: Node.js uses an event-driven, non-blocking I/O model. This makes it particularly suitable for applications that require handling a large number of concurrent connections, such as real-time applications, chat applications, and streaming services. PHP traditionally follows a blocking approach, which can limit its performance in highly concurrent scenarios.
2. Single Language for Frontend and Backend: With Node.js, you can use JavaScript on both the frontend and backend, which can simplify development and maintenance for full-stack developers. This eliminates context-switching between languages and allows code and libraries to be shared.
3. Performance and Scalability: Due to its non-blocking architecture, Node.js can handle a high number of concurrent connections with low memory usage. It excels in scenarios that require real-time processing and data streaming, making it a solid choice for applications that need to scale quickly and efficiently.
4. Microservices and APIs: Node.js is well-suited for building microservices architectures and creating APIs, as its lightweight nature allows for efficient communication between different components of an application.
5. Real-time Applications: Node.js is a strong contender for building real-time applications like live chats, online gaming, collaborative tools, and other applications that require instant updates and interactions.

> What is  event-driven in node js?

"Event-driven" means actions are triggered by specific events, like a user clicking a button or a sensor detecting motion. It's a way systems respond to occurrences rather than following a fixed sequence.

In JavaScript, event-driven programming is based on the concept of callbacks. A callback is a function passed as an argument to another function and  executed when a certain event occurs. For example, a web application might have a function  called when the user clicks a button. This function would execute a callback when the "click" event occurs.

* Benefits:
  1. Asynchronous operations: Efficiently handles tasks without blocking the main process.
  2. Scalability: Can handle high loads by distributing event processing across multiple processes or machines.
  3. Real-time updates: Enables applications to respond immediately to changes in data or user interactions.

* Key components:
  1. Event emitter : A machanism that generates and emits events.
  2. Event listener : A function that is executed when a specific event occurs.
  3. Event queue : A data structure that stores events waiting to be processed.
  4. Event loop : A machanism that continuously checks the event queue and executes the appropriate listeners.

* Event Types : 
  1. System events: e.g., 'exit', 'error'.
  2. Custom events: Created by developers to represent specific actions or conditions within their applications.

* Event listeners:
  1. Registered using the on() method: emitter.on('event_name', listenerFunction);

* Event emission:
  1. Triggered using the emit() method: emitter.emit('event_name', arg1, arg2, ...);

* Example:

  '''
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter();

    myEmitter.on('event', (arg1, arg2) => {
        console.log('An event occurred!');
        console.log(arg1, arg2);
    });

    myEmitter.emit('event', 'Hello', 'world');
  '''

In this example:

  1. MyEmitter is a custom event emitter class
  2. An event listener is attached to the 'event' event.
  3. The 'event' is emitted with arguments 'Hello' and 'world'.
  4. The event listener is executed, printing the arguments to the console.

* Key points to remember:
  1. Event-driven architecture is a powerful paradigm for building scalable, responsive applications.
  2. Node.js provides a built-in EventEmitter class for creating and managing events.
  3. Events are fundamental to the asynchronous nature of Node.js.
  4. By understanding events and event-driven principles, you can effectively leverage the power of Node.js for building efficient and scalable applications.

>What is event argument?

When we emit a event that time we passing some argument is call event argument.

> Single Threaded Event Loop Model Processing Steps

Clients Send requests to the Web Server.
* Node.js Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node.js Web Server receives those requests and places them into a Queue. It is known as Event Queue.
* Node.js Web Server internally has a Component, known as Event Loop. Why it got this name is that it uses an indefinite loop to receive requests and process them.
Event Loop uses Single Thread only. It is the main heart of the Node.js Platform Processing Model.
Event Loop checks any Client Request is placed in the Event Queue. If no, then wait for incoming requests for indefinitely.
If yes, then pick up one Client Request from the Event Queue
Starts process that the Client Request
If that Client Request Does Not require any Blocking IO Operations, then process everything, prepare the response and send it back to the client.
If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
Checks Threads availability from Internal Thread Pool
Picks up one Thread and assign this Client Request to that thread.
That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
Event Loop in turn, sends that Response to the respective Client.

> By default how many thread can use?

  4 thread can use. but it dependencies on your system how many core it provide.

> What is chrome v8 engine?

V8 is a C++ based open-source JavaScript engine developed by Google. It was originally designed for Google Chrome and Chromium-based browsers ( such as Brave ) in 2008, it parses and executes JavaScript code.

> How V8 compiles JavaScript code?

Compilation is the process of converting human-readable code to machine code. There are two ways to compile the code

Using an Interpreter: The interpreter scans the code line by line and converts it into byte code.

Using a Compiler: The Compiler scans the entire document and compiles it into highly optimized byte code.
The V8 engine uses both a compiler and an interpreter and follows just-in-time (JIT) compilation to speed up the execution. JIT compiling works by compiling small portions of code that are just about to be executed. This prevents long compilation time and the code being compiles is only that which is highly likely to run.

### Node.js Module ###

>What is module in node?

Module is a set of functionality provide for reuse in node.

>How to import singel and multiple function from a module?

```
// module2.js
function sayName(name){
  console.log('This is my name',name)
}
module.exports = sayName;

//App.js

import module2 from './module2.js'

// To import singel function
module2('Shantonu');

```

> What type of module in Node?

1. Core module
2. Local module
3. Third party module

> Top 5 module?

1. os 
2. fs 
3. path 
4. event 
5. http

> Explain Buffer data type in Node.js?

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
> What are the global objects of Node.js?

Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.

These objects are modules, functions, strings and object itself as explained below.

1. global variable:

```
var myvar;
```
2. console:

It is an inbuilt global object used to print to stdout and stderr.

```
console.log("Hello World"); // Hello World

```
> The following table lists some of the important core modules in Node.js.

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


> Node js most importent core module services and modules short discurtion

1. Streams and name of some functionality

* Purpose: Handle streaming data efficiently, such as reading from or writing to files, network communications, or any kind of continuous data flow.

```
import fs from 'fs'
const readableStream = fs.createReadStream('file.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

```

2. HTTP/HTTPS and name of some functionality

* Purpose: Create web servers and handle HTTP/HTTPS requests and responses.

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

```

3. File System (fs) and name of some functionality

* Purpose: Interact with the file system, including reading, writing, and manipulating files and directories.
* Top functionality are fs.readFile()->read file, fs.writeFile()->write file,fs.unlink()->Delete file,fs.mkdir()->Create file.

```
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

```

4. Path and name of some functionality

* Purpose: Manupulatin, joining, formating the path.

```
const path = require('path');

const fullPath = path.join(__dirname, 'file.txt');
console.log(fullPath);

```
* Name of fumction is join(), resolve(), parsing(), formating().

5. Events and name of some functionality

* Purpose: Implement event-driven programming with the EventEmitter class.
* Functionality are eventEmitter(), event queue, event hader, event loop. 

```
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('event', () => {
  console.log('An event occurred!');
});

eventEmitter.emit('event');

```

6. Child Processes and name of some functionality

* Purpose: Spawn new processes and execute shell commands.

```
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

```
7. Timers 

* Purpose: Schedule code execution with functions like setTimeout, setInterval, and setImmediate.

```
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

setInterval(() => {
  console.log('This runs every 1 second');
}, 1000);

```

8. Buffer and name of some functionality

* Purpose: Handle binary data directly.

```
const buf = Buffer.from('Hello, World!');
console.log(buf.toString('hex'));

```

9. Crypto and name of some functionality

* Purpose: Handle cryptographic operations such as hashing, encryption, and decryption.

```
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);

```

10. Cluster and name of some functionality

* Purpose: Enable multi-core server applications by forking worker processes.

```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
  }).listen(8000);
}

```

> What is Node.js Process Model?

Node. js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc. The process is a global object, an instance of EventEmitter, can be accessed from anywhere.

### Node js child process ###

There are four different ways to create a child process in Node: spawn(), fork(), exec(), and execFile()

> Basic understanding of the concept of child process:
Node.js runs in a single thread. You can, however take advantage of multiple processes.

child_process module allows to create child processes in Node.js. Those processes can easily communicate with each other using a built-in messaging system.

Here are key points to understand about child processes in Node.js:

* Spawning Processes: The child_process module in Node.js provides functions for creating and interacting with child processes. The spawn, exec, execFile, and fork functions are commonly used for this purpose.
* `spawn`: This function is used to spawn a new process and is suitable for running commands in a shell. It returns a stream (EventEmitter) that provides access to the standard input, output, and error streams of the child process.
* `exec` : This function is used to run a shell command in a subprocess. It buffers the output and provides it as a callback, making it convenient for running simpler commands.
* `fork` : This function is a special case of spawn used specifically for creating new Node.js processes. It sets up inter-process communication (IPC) automatically, allowing parent and child processes to exchange messages.
* Inter-Process Communication (IPC) : Child processes can communicate with the parent process and vice versa using a message-passing mechanism. The send method is used to send messages, and the message event is used to receive them.

> Explain the use of the spawn or fork functions from the child_process module

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

> How to listen for the error event and handle errors that may occur during the execution of a child process.

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

> How Node.js read the content of a file?

The "normal" way in Node.js is probably to read in the content of a file in a non-blocking, asynchronous way. That is, to tell Node to read in the file, and then to get a callback when the file-reading has been finished. That would allow us to handle several requests in parallel.

Common use for the File System module:

Read files
* Create files
* Update files
* Delete files
* Rename files

> Read Files

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
> Creat File:

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

> Update Files

The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()

> Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

```
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

> Rename Files

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

> What is cluster?

The Cluster module in Node.js creates child processes (workers) that share the same server ports. This can be particularly useful for taking advantage of multi-core systems, allowing multiple instances of an application to run on different cores and handle more load.

Here is an overview of the Cluster module and how to use it:

> Key Concepts :

* Master Process: The initial process started and is responsible for forking worker processes.
* Worker Process: Child processes forked by the master process. Each worker is an instance of the application.

Basic Usage

1. Require the Cluster Module: Import the cluster module and OS to determine the number of available CPUs and http for server creation.

2. Check if Master Process: Use cluster.isMaster to check if the current process is the master.

3. Fork Workers: If the current process is the master, use the cluster. fork() to create worker processes.

4. Create Server in Workers: Create the server if the current process is a worker.

> Example Code

Here's a simple example demonstrating the usage of the Cluster module:

```
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // Optionally restart the worker
        // cluster.fork();
    });
} else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

```

> Explanation

* Master Process:

    * Logs that the master process is running.
    * Forks workers equal to the number of CPUs.
    * Listens for exit events on workers to log when a worker dies (and optionally restart it).
* Worker Process:
    * Creates an HTTP server that responds with "Hello World" on port 8000.
    * Logs that the worker process has started.
> Benefits of Using Cluster Module

1. Improved Performance: By utilizing all available CPU cores, the application can handle more requests.
2. Fault Tolerance: If a worker crashes, it doesn't bring down the entire application. The master can spawn new workers.
3. Load Balancing: Multiple workers can handle requests concurrently, providing better load distribution.

> Considerations

  * State Sharing: Workers do not share state. If shared state is needed, consider using external storage (e.g., databases, Redis).
  
  * Inter-Process Communication: Use worker.send() and process.on('message', handler) for communication between the master and workers.

The Cluster module is powerful for scaling Node.js applications on multi-core systems, ensuring better performance and reliability.

## HTTP Module ##

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hypertext Transfer Protocol (HTTP).

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

> HTTP module call third party api with GET request :

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

> How to make a POST request using the http module ?

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

## URL Module ##

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
## Streams Module ##

> How many types of streams are present in node.js?

streams are objects that allow you to handle data flow (reading, writing, or processing) in chunks rather than loading the entire data into memory. This makes streams memory-efficient and allows for processing large files or real-time data effectively.There are four types of streams

* Readable − Stream which is used for read operation.
* Writable − Stream which is used for write operation.
* Duplex − Stream which can be used for both read and write operation.
* Transform − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.

Event:

* data − This event is fired when there is data is available to read.
* end − This event is fired when there is no more data to read.
* error − This event is fired when there is any error receiving or writing data.
* finish − This event is fired when all the data has been flushed to underlying system.
* pipe - Emitted when a readable stream is piped into a writable stream.
* unpipe - Emitted when the readable stream is unpiped from the writable destination.

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
> Advantages of Streams

1. Memory-Efficient:
  * Process data in chunks, avoiding high memory usage.

2. Faster:
  * Start processing as soon as data is available, without waiting for the entire file or response

3. Scalable:
  * Ideal for applications dealing with large files or real-time data streams.

4. Asynchronous:
  * Streams operate asynchronously, fitting well with Node.js's non-blocking architecture. 

> How to handle large data in Node.js?

The Node.js stream feature makes it possible to process large data continuously in smaller chunks without keeping it all in memory. One benefit of using streams is that it saves time, since you don't have to wait for all the data to load before you start processing. This also makes the process less memory-intensive.

Some of the use cases of Node.js streams include:
* Reading a file that's larger than the free memory space, because it's broken into smaller chunks and processed by streams. For example, a browser processes videos from streaming platforms like Netflix in small chunks, making it possible to watch videos immediately without having to download them all at once.
* Reading large log files and writing selected parts directly to another file without downloading the source file. For example, you can go through traffic records spanning multiple years to extract the busiest day in a given year and save that data to a new file.

```
const downloadFile = (fileKey, downloadPath) => {
  const downloadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
  };

  const fileStream = fs.createWriteStream(downloadPath);

  s3.getObject(downloadParams)
    .createReadStream()
    .on('error', (err) => {
      console.error('Download Error', err);
    })
    .pipe(fileStream)
    .on('close', () => {
      console.log('Download Success');
    });
};

// Usage
downloadFile('your-file-key', '/path/to/save/large/file');

```

### Handle large CSV files ##

Here's a comprehensive approach that incorporates the best aspects of previous responses and addresses potential shortcomings:


1. Choose a Suitable Database: 
  * MySQL, PostgreSQL, or MongoDB: Better suited for larger datasets, offering robust features and scalability.
2. Implement Chunking:
  * Divide the CSV file into smaller, manageable chunks to avoid memory overload.
  * Use a streaming library like readline to process the file line by line.
  * Process each chunk independently and store the data in the database.
3. Optimize Database Queries:
  * Indexing: Create appropriate indexes on frequently queried columns to improve performance.
  * Query Optimization: Use EXPLAIN or EXPLAIN ANALYZE to analyze query execution plans and identify bottlenecks.
  * Caching: Implement caching mechanisms (e.g., in-memory caching, database caching) to avoid redundant database queries.
4. Consider Asynchronous Programming:
  * Utilize Node.js's asynchronous capabilities to handle I/O operations efficiently.
  * Employ promises or async/await syntax for cleaner code.
5. Implement Error Handling:
  * Thoroughly handle potential errors during file reading, database operations, and API interactions.
  * Log errors for debugging purposes and provide informative error messages to clients.
6. Rate Limiting:
  * If necessary, implement rate limiting to prevent excessive API usage and protect your resources.
  * Use libraries like express-rate-limit to enforce rate limits.
7. Security:
  * Validate and sanitize input data to prevent security vulnerabilities like SQL injection and cross-site scripting (XSS).
  * Protect sensitive data using appropriate encryption and authentication mechanisms.
8. Consider Caching (Optional):
  * If API responses are frequently repeated, caching can significantly improve performance.
  * Use a caching library like redis to store frequently accessed data in memory.

### Node.js Events ###

> What is Event in node?

Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

> The EventEmitter Object

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
> What to do for maintain the code quality in node js

* Use the latest Node.js version.: This will ensure that you have access to the latest features and bug fixes.
* Use a consistent code style.: This will make your code more readable and maintainable.
* Modularize your code.: This will make it easier to identify and isolate specific components of your code, and make it easier to debug and maintain.
* Use async/await and Promises.: This will help you write more efficient and readable code.
* Handle errors properly.: This will help you prevent errors from crashing your application.
* Secure your application.: This will help you protect your application from attacks.
* Test your code.: This will help you catch errors before they cause problems in production.


### NODE.JS RESTFUL API ###

> Explain RESTful Web Services in Node.js?

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

> What is the difference between req.params and req.query?

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
> What is the difference between Patch and Put?

* PUT is used for full updates, where the client provides the complete representation of the resource, while PATCH is used for partial updates, where the client provides only the changes to be applied.
* PUT is idempotent, meaning that making the same request multiple times has the same effect as making it once, while PATCH may not be idempotent depending on the specific modifications applied.

### Node js advance ###

> What to do to maintain the performance of your node application and what technology you should use for it?

Maintaining the performance of a Node.js application involves a combination of best practices in coding, monitoring, scaling, and employing the right technologies. Here's a comprehensive approach:

Best Practices for Maintaining Performance

1. Efficient Code Practices:
  * Avoid Blocking Code: Ensure your code is non-blocking. Use asynchronous methods to prevent blocking the event loop.
  * Use Promises and Async/Await: Modern syntax for managing asynchronous code which can lead to cleaner and more efficient code.
  * Optimize Loops: Use appropriate loop constructs and avoid heavy computations inside loops.
  * Minimize Middleware: Only use middleware that is necessary to reduce overhead.
2. Memory Management:
  * Avoid Memory Leaks: Ensure objects are not unintentionally kept in memory.
  * Use Streams for Large Data: Instead of loading large data sets into memory, use streams to process data in chunks.
3. Error Handling:
  * Global Error Handler: Implement a global error handler to catch and log all uncaught exceptions.
  * Graceful Shutdowns: Ensure your application can shut down gracefully, releasing all resources.
4. Database Optimization:
  * Indexing: Proper indexing of your database tables to speed up queries.
  * Connection Pooling: Use connection pooling to manage database connections efficiently.
  * NoSQL Databases: Use NoSQL databases like MongoDB for unstructured data where appropriate.
5. Caching:
  * In-memory Caching: Use Redis or Memcached to cache frequent queries.
  * CDN: Use a Content Delivery Network to cache static assets and reduce server load.

Technologies to Use

1. Monitoring and Logging:
  * PM2: A production process manager for Node.js applications with a built-in load balancer.
  * Winston/Morgan: Logging libraries to capture and store logs.
  * New Relic/AppDynamics: Advanced performance monitoring and APM (Application Performance Management) tools.
  * Prometheus + Grafana: Monitoring and alerting toolkit paired with a visualization tool.
2. Profiling and Debugging:
  * Node.js Inspector: Built-in debugging tool for Node.js.
  * clinic.js: Performance profiling suite to diagnose performance issues.
3. Testing:
  * Jest/Mocha: Testing frameworks to ensure your application works as expected.
4. Security:
  * Helmet: Helps secure your Node.js app by setting various HTTP headers.
5. Containerization and Orchestration:
  * Docker: Containerize your Node.js application for consistent environments.
  * Kubernetes: Orchestrate your containers for scaling and management.
  * Docker Compose: Simplifies the deployment of multi-container applications.
6. Continuous Integration and Deployment (CI/CD):
  * Jenkins/GitHub Actions/Travis CI: Automate testing and deployment of your Node.js application.
  * Docker + Kubernetes: Automate deployment pipelines for containerized applications.

Scaling Strategies

1. Horizontal Scaling:
  * Cluster Module: Utilize Node.js's cluster module to create child processes that share the same server port.
  * Load Balancing: Use Nginx or HAProxy for load balancing across multiple instances.
2. Microservices Architecture:
  * Service-Oriented Architecture: Break down your application into smaller, independently deployable services.
3. Serverless:
  * AWS Lambda/Azure Functions: Utilize serverless functions for running pieces of your application code on demand.
4. Database Scaling:
  * Sharding: Distribute data across multiple database instances.
  * Replication: Use database replication to enhance read performance and availability.

> In node js how to handle load balance on request data? If 1 billion of hit on a API then how to handle it?

Handling a large volume of requests (e.g., 1 billion hits on an API) in a Node.js application requires a combination of scaling strategies, architectural best practices, and optimization techniques. Here's a guide to effectively handle such high traffic:

1. #### Use a Load Balancer ###

  * Purpose: Distribute incoming requests across multiple server instances.
  * Options:
    * Use a cloud-based load balancer like AWS Elastic Load Balancer (ELB),Google Cloud Load Balancer
    * Use open-source solutions like NGINX or HAProxy.
2. ### Horizontal Scaling ###

  * Scale out: Add more instances of your Node.js application behind the load balancer.
  * Use container orchestration tools like Kubernetes or Docker Swarm to manage scaling.
  * Set up auto-scaling based on CPU, memory, or request count.

3. ### Optimize the Node.js Application ###

  * Cluster Mode: Use Node.js's cluster module or tools like PM2 to utilize all CPU cores.
  * Asynchronous I/O: Ensure all I/O operations are non-blocking.
  * Use Streams: For processing large data (e.g., file uploads).
  * Caching
    * Use in-memory stores like Redis or Memcached for frequently accessed data.
    * Implement content delivery networks (CDNs) for static content.

4. ### Database Optimization ###
  * Read/Write Separation: Use read replicas for read-heavy operations.
  * Query Optimization: Optimize database queries, use proper indexes, and denormalize where necessary.

5. ### Stateless Architecture ##

  * Store minimal session data in the application.
  * Use external session stores like Redis or DynamoDB for session management.

6. ### Rate Limiting and Throttling ##

  * Protect your API from abuse:
    * Use libraries like express-rate-limit.

    ```
      const rateLimit = require('express-rate-limit');
      const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 1000, // Limit each IP to 1000 requests per windowMs
      });
      app.use(limiter);

    ```
7. ### Queueing for Heavy Operations ###

  * Offload heavy tasks to background workers using message queues like: RabbitMQ, Apache Kafka
8. ### API Gateway ###

  * Use API gateways like AWS API Gateway or Kong for:
    * Authentication.
    * Load balancing.

9. ### Monitor and Optimize ###

  * Use tools for real-time monitoring: Prometheus + Grafana
  * Monitor:
    * Request per second (RPS).
    * CPU and memory usage.

### Node js Error Handel ###

> How we can handle error in node js?

Handling errors in Node.js is crucial for building robust and maintainable applications. Here are some best practices for error handling in Node.js:

1. Use try-catch for Synchronous Code: For synchronous code, the 'try-catch' block is a simple and effective way to handle errors.

```
try {
  // Synchronous code that might throw an error
  let data = JSON.parse('invalid JSON string');
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}

```

2. Handle Errors in Asynchronous Code: Asynchronous code, especially when using callbacks, needs explicit error handling.

Using Callbacks
For callback-based code, the first argument of the callback function is typically an error object.

```
const fs = require('fs');

fs.readFile('path/to/file', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log(data);
});

```

Using Promises and `.catch()`
For promise-based code, use the .catch() method to handle errors.

```
const fsPromises = require('fs').promises;

fsPromises.readFile('path/to/file', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading file:', err.message);
  });

```

Using async/await with try-catch
For async/await, use try-catch to handle errors.

```
const fsPromises = require('fs').promises;

async function readFile() {
  try {
    const data = await fsPromises.readFile('path/to/file', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

readFile();

```

3. Global Error Handling: Use global error handlers for uncaught exceptions and unhandled promise rejections.

* Uncaught Exceptions

  Handle uncaught exceptions to prevent the application from crashing unexpectedly.

  ```
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1); // Exit the process to avoid unknown state
  });

  ```

* Unhandled Promise Rejections

  Handle unhandled promise rejections to catch errors in promises that are not explicitly handled.

  ```
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Exit the application or handle it gracefully
  });

  ```

4. Centralized Error Handling Middleware in Express

  * In an Express application, create centralized error handling middleware.

  ```
    const express = require('express');
    const app = express();

    // Your routes here

    // Centralized error handling middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  ```

5. Logging Errors

Implement logging to record errors for later analysis. Use logging libraries like 'winston' or 'morgan'.

```
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});

logger.error('This is an error message');

```

6. Graceful Shutdown:
Ensure the application shuts down gracefully to avoid data corruption or incomplete operations.

```
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  server.close(() => {
    console.log('HTTP server closed.');
    // Close other resources like database connections here
    process.exit(0);
  });
});

```

7. Validation and Sanitization

Validate and sanitize user input to prevent errors and security vulnerabilities like SQL injection or XSS.

```
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

app.post('/user', 
  body('email').isEmail().withMessage('Invalid email address'), 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Handle valid request here
    res.send('User created');
  }
);

```

### Authentication ###

> JWT Authentication

We actualy working on JWT token for authentication.
JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

> When should you use JSON Web Tokens?

1. Authorization
2. Information Exchange

> What is the JSON Web Token structure?

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

* Header
* Payload
* Signature

Therefore, a JWT typically looks like the following.

```
xxxxx.yyyyy.zzzzz

```

Let's break down the different parts.

> Header

The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm

> Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

  > Registered 
A set of predefined claims that are not required but are recommended to be used to deliver useful and interoperable claims

  > Public
Custom claims that developers create to suit their specific needs

  > private 
Custom claims that developers define to share information between parties who agree to use them

> Signature
Used to verify the sender of the token and to ensure that the message hasn't been changed

> O'auth2 mechanism for authentication system

OAuth 2.0 is a popular authorization framework that is widely used for securing APIs and implementing authentication mechanisms in web and mobile applications. When implementing OAuth 2.0 in a Node.js authentication system, you typically follow these steps:

1. Choose an OAuth 2.0 Provider:
  * Decide on an OAuth 2.0 provider that you want to integrate with, such as Google, Facebook, GitHub, or your own custom OAuth 2.0 server.
2. Register Your Application:
  * Register your application with the chosen OAuth 2.0 provider to obtain client credentials (client ID and client secret). This step usually involves creating an application in the provider's developer console and specifying redirect URIs where users will be redirected after authentication.
3. Install OAuth 2.0 Library:
  * Install an OAuth 2.0 library for Node.js. Popular libraries include Passport.js with OAuth 2.0 strategies for various providers, oauth2orize, and simple-oauth2.
4. Configure OAuth 2.0 Strategy:
  * Configure the OAuth 2.0 strategy for your chosen provider in your Node.js application. This involves setting up the client ID, client secret, callback URL, and other necessary parameters.
5. Implement Authentication Routes:
  * Create routes in your Node.js application to handle authentication and authorization flows. These routes typically include endpoints for initiating the OAuth 2.0 authorization process, handling callback redirects, exchanging authorization codes for access tokens, and refreshing tokens if necessary.
6. Integrate Authentication Middleware:
  * Integrate authentication middleware into your application's routes to protect resources that require authentication. Middleware like Passport.js can handle user authentication and authorization automatically once configured.
7. Handle User Data:
  * Once a user is authenticated, you may receive user profile data from the OAuth 2.0 provider. Store this data in your application's database or session to manage user sessions and personalize user experiences.
8. Handle Token Expiry and Refresh:
  * Implement logic to handle token expiry and refresh if using OAuth 2.0's access tokens. This ensures that users can continue accessing protected resources without needing to re-authenticate frequently.
9. Secure APIs and Resources:
  * Secure your application's APIs and resources by validating OAuth 2.0 access tokens for each incoming request. Ensure that only authorized users have access to protected endpoints.

> Explain the OAuth 2.0 authentication system

Here's an explanation of how OAuth 2.0 authentication system works:

1. Roles:
  * Resource Owner: The resource owner is the user who owns the data or resources that the client application wants to access.
  * Client: The client is the application that wants to access the user's resources. It could be a web application, mobile app, or any other type of application.
  * Authorization Server: The authorization server is responsible for authenticating the user and issuing access tokens to the client application.
  * Resource Server: The resource server hosts the protected resources that the client application wants to access on behalf of the user.
2. Authorization Flow:
  * The OAuth 2.0 authorization flow typically involves the following steps:
    1. Authorization Request: The client application redirects the user to the authorization server to request authorization. This usually involves providing a redirect URI where the user will be redirected after granting authorization.
    2. User Authentication: The user authenticates with the authorization server, providing their credentials if necessary.
    3. Authorization Grant: Upon successful authentication, the user is prompted to authorize the client application to access their resources. They may be asked to approve scopes indicating the types of access the client is requesting.
    4. Authorization Response: If the user grants authorization, the authorization server issues an authorization code or access token to the client application and redirects the user back to the client application's redirect URI.
    5. Token Exchange: The client application exchanges the authorization code for an access token by making a token request to the authorization server.
    6. Access Resources: The client application uses the access token to access protected resources on the resource server on behalf of the user. The resource server validates the access token and grants access if the token is valid and authorized.
3. Access Tokens:
  * Access tokens are short-lived credentials issued by the authorization server that the client application uses to access protected resources on behalf of the user.
  * Access tokens are typically bearer tokens, meaning that whoever possesses the token can use it to access the resources. Therefore, they should be kept secure and transmitted over HTTPS.
  * Access tokens may have scopes indicating the specific permissions granted to the client application.
4. Refresh Tokens (Optional):
  * In some OAuth 2.0 flows, the authorization server may also issue a refresh token along with the access token. Refresh tokens can be used to obtain new access tokens without requiring the user to re-authenticate.
  * Refresh tokens are long-lived credentials and should be kept secure, as they can be used to obtain new access tokens.


### Express js ###

> Explain the purpose of the ExpressJS package.

Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in server-side applications. It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

> How does an Express code look like?

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

> Which are the arguments available to an Express JS route handler function?

Following are the arguments that are available to an Express.js route handler-function:

* Req: the request object
* Res: the response object
* Next (optional): It is a function employed to pass management to one of the above route handlers.

> In Express how many type of middleware exist?

An Express application can use the following types of middleware: 

* Application-level middleware. 

* Router-level middleware. 

* Built-in Middleware

* Error-handling middleware

* Third-party Middleware


> What is Middleware?

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

> Application-level middleware: 

The application-level middleware method is used to bind to the app object using app.use() method. It applies on all routes.

```
//This middleware will execute for each route.  
app.use(function (req, res, next) {  
  console.log('Current Time:', Date.now())  
  next()  
}) 
```

> Router-level Middleware: 

The router-level Middleware is used to bind to a specific instance of express.Router().Built-in Middleware: The built-in Middleware was introduced with version 4.x. It ends the dependency on Connect.

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

> How to create custom middleware in express js

Creating custom middleware in Express.js allows you to add additional functionality to your routes and requests. Middleware functions in Express.js have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle (next). Here's how you can create custom middleware in Express.js:

1. Create a Middleware Function:
Define a function that will act as your middleware. This function should accept three parameters: req, res, and next.
2. Implement Middleware Logic:
Write the logic for your middleware function. This could involve tasks such as logging, authentication, parsing request data, modifying the request or response objects, etc.
3. Call the next() Function:
Once your middleware logic is complete, call the next() function to pass control to the next middleware function in the stack. If you do not call next(), the request will be left hanging, and the response will not be sent back to the client.
4. Use Middleware in Your Application:
To use your custom middleware in your Express.js application, use the app.use() method to mount it to a specific route or globally.

Here's an example of how to create a simple logging middleware in Express.js:

```
// Define custom middleware function
const myLogger = (req, res, next) => {
  console.log('Logging request:', req.method, req.url);
  next(); // Pass control to the next middleware function
};

// Mount middleware globally
app.use(myLogger);

// Mount middleware to a specific route
app.get('/api/users', myLogger, (req, res) => {
  // Route logic
  res.send('List of users');
});

```

In this example:

* The myLogger middleware function logs the HTTP method and URL of each incoming request.
* It is mounted globally using app.use() so that it applies to all routes.
* It is also mounted specifically to the /api/users route, where it will only be executed for requests to that route.

## Rabit MQ ##

> Why we use rabit MQ instead of building a custom queue system with Node.js?

Using RabbitMQ is generally preferred because it is a battle-tested, reliable, and feature-rich solution for message queuing. A custom-built Node.js queue can be useful for simple or highly specific needs but often lacks the robustness, scalability, and features that RabbitMQ provides out of the box.

> What is server less?

Serverless computing is a cloud computing execution model that allocates machine resources on an as-used basis. In simpler terms, it means you can build and run applications without having to worry about managing any servers. You simply upload your code and let someone else handle the infrastructure.

>What is RabbitMQ? How does it differ from other messaging systems like Kafka?

RabbitMQ and Kafka are both popular messaging systems. 
* RabbitMQ Architecture Message broker but Kafka distributed streaming platform.
* RabbitMQ Data Handling by Queues, exchanges but Kafka use Topics, partitions
* RabbitMQ Scalability Vertical scaling but Kafka Horizontal scaling.
* RabbitMQ Use Cases Microservices, task queues but kafka Real-time data streaming, metrics.

> What are the core components of RabbitMQ?

The core components of RabbitMQ are:

* Producer: An application that sends messages to the RabbitMQ server.
* Exchange: A virtual entity that receives messages from producers and routes them to queues based on defined rules.
* Queue: A buffer that stores messages until they are consumed by consumers.
* Consumer: An application that receives messages from queues.


## Coding  ##

> How to create a simple server in Node.js that returns Hello World?

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

> Create Database:

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