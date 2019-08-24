var searchTerm = "pizza"; //term? 

// var records

// var starYear = 	


// var endYear 



var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="  + searchTerm + "&api-key=DxkaGZx0sxuEBxoRngGagUQ82wX5eOHT";

$.ajax({
    url: queryURL,
    method: "GET"
  }) 
  
  .then(function(response) {

console.log(response.response.docs[0]);

for (var i = 0; i < response.response.docs.length; i++) {
//headline
var headline = response.response.docs[i].headline.main;
console.log(response.response.docs[i].headline.main);
//author
var author = response.response.docs[i].byline.original;
console.log(response.response.docs[i].byline.original);
//pubdate
var pubdate = response.response.docs[i].pub_date
console.log(response.response.docs[i].pub_date);
//weburl
var webURL = response.response.docs[i].web_url;
console.log(response.response.docs[i].web_url);
}
  });

