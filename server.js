var express = require('express');
var parse = require('user-agent-parser');
var port = process.env.PORT || '8080';
var app = express();
app.get('/', function(req,res){
	var ua = parse(req.headers['user-agent']);
	var l = req.headers['accept-language'].split(',');
	var ip = req.headers['x-forwarded-for'].split(',');
	res.send(JSON.stringify({ipaddress: ip[0], language: l[0], os: ua.os.name + ' ' + ua.os.version}));
	res.end();
}).listen(port, function(){
	console.log('listening on '+port);
});
