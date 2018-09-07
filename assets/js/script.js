


var apiKey = "&api-key=0d497c40413e4c0aac254e462851c8a9";
var searchTerm = "?q=bob";
var records = "?fl=5";
var startYear = "?begin_date=20170101";
var endYear = "?end_date=20170905";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + searchTerm + records + startYear + endYear + apiKey;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0d497c40413e4c0aac254e462851c8a9",
  'q': "bob",
  'begin_date': "20170101",
  'end_date': "20170202"
});

$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result);
//   var searchTerm = result[i];
//     var p = $("<p>".text(+ searchTerm))

}).fail(function(err) {
  throw err;
});
