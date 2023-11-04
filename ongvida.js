// configurando os programas 
var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write("<h1>HELLO WOLD EM NODE</h1>");
    res.end();
})

server.listen(3000, ()=>{
    console.log("Servidor http ativo");
})