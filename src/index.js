var d3 = require("d3");
var get = require("./utils/get.js");
var app = require("./app.js");

var loading = d3.select("#app").append("p").text("Loading");

Promise.all([get("data/rub.tsv"), get("data/oil.tsv")]).then(function(results){
	setTimeout(function(){loading.remove();}, 5000);
	app(d3.tsvParse(results[0]), d3.tsvParse(results[1]));
});
