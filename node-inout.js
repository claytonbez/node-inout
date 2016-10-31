var util = require('util');
var EventEmitter = require('events').EventEmitter;

var readInputAsync = function(){
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        terminal:false
    });
    var self = this ;
    rl.on('line',function(data){
        self.emit('in',data) ;
    });
    this.on('out',function(line,del){
        process.stdout.write(line);
        if (del != undefined){
            if (del == true){
                process.stdout.write("\r\n$>");
            }
        }

    });
};

util.inherits(readInputAsync,EventEmitter);

module.exports = readInputAsync;