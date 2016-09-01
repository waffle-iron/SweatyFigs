var express = require('express');
var app = express();

/**
simulate database
**/
var items = [];

var addItem = function(item) {
	var itemObj = {};
	if (item) {
		itemObj._id = items.length;
		itemObj.name = item;
		items.push(itemObj);
	}
};

// add array of items
var addItems = function(food) {
	food.forEach(function(item) {
		addItem(item);
	})
};

addItems(['carrots', 'potatoes', 'rice']);

console.log(items);

// api/ingredients endpoint
app.get('/api/ingredients', function (req, res) {
  res.send(items);
});

app.post('/add/:item', function (req, res) {
	addItem(req.params.item)
  res.send(items);
});

app.get('/', function (req, res) {
  res.send('Home Page');
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});