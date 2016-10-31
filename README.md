# node-inout
A simple terminal input and output via stdin and stdout using event emitters as transport for the data
## Setup
```javascript
var terminal = require('./node-inout.js'); // If placed in same directory as script you want to use it in
```
## Setup Async Reading 
Currently only type available
```javascript
var reader = new readInputAsync(); //Initiates readline module and emits event on receipt of a line
```
####Listen for 'In' event
<p>structure : object.on('in',function(callback){}); </p>
```javascript
reader.on('in',function(data){
  console.log("stdin-> " + data) ; //Here you can do pretty much anything with the received input
});
```
####Send data to the terminal (stdout)
structure : object.emit('out',data,newline) ; 
```javascript
//If you want to send and go to the next line use
  reader.emit('out,'Hello World!,true); 
//If you want to send only and not go to a new line
  reader.emit('out','Hello World',false) ; 
    //or the newline argument can be omitted. 
  reader.emit('out','Hello World') ; 
```
That's it! Now you have an event based console input and output. 
