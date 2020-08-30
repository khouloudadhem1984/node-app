const http = require('http');
const fs = require('fs');
const port = 5000;
const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    
            console.log('new customer visited the page faced an Error');
            res.write('Hello Suta');
        res.end();
});

server.listen(port ,function(error){
    if(error){
        console.log('something error happened');
    }else{
        console.log('Hello Absi');
        console.log('server is listening on port : ' + port);
        console.log('Go start your test ...');
    }
})
