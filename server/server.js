var express = require('express');

var	bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 57986);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  var queryParameters = [];
  var context = {};
  for(var parameters in req.query)
  {
  	queryParameters.push({'name':parameters, 'value': req.query[parameters]});
  }
  context.dataString = queryParameters;
  res.render('get', context);

});

app.post('/', function(req,res)
{
	var queryParametersPost = [];
	var	bodyParameters = [];
	var context = {};

	for (var queryParametersPost in req.query)
	{
		queryParametersPost.push({'name': postParams, 'value' :req.query[postParams]});
	}
	for(var bodyParameters in req.body)
	{
		bodyParameters.push({'name':bodyParameters, 'value': req.body[bodyParameters]});
	}

	context.queryString = queryParameters;
	context.body = bodyParameters;
	res.render('post', context);
	
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.log(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});