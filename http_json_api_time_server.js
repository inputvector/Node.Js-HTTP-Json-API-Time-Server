var http = require('http')
var url = require('url')

function get_time(){
  var now = new Date()
  return {
        year : now.getFullYear(),
        month : now.getMonth() + 1,
        date : now.getDate(),
        hour : now.getHours(),
        minute : now.getMinutes()}
}

var server = http.createServer(function (request, response) {
   if (/^\/api\/currenttime/.test(request.url)){
   	var result = get_time()
     	response.writeHead(200, {'Content-Type': 'text/plain'})
     	response.end(JSON.stringify(result))
   }else{
   	  response.writeHead(404 , {'Content-Type': 'text/plain'})
    	response.end("URL does not matched the pattern of /api/currenttime")
   }
});

server.listen(Number(process.argv[2]))
console.log('Node server running on http://localhost:'+ process.argv[2])
