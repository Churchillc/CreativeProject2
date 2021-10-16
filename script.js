document.getElementById("robot").addEventListener("click", function(event) {
    var myurl = "https://api.quotable.io/random";
    fetch(myurl)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "<img src=https://robohash.org/"+ getRandomInt(10000) + ".png class=\'pic\'>"
        results += "<p class=\'quote\'>" + json.content;
        results += "<br>"
        results += " - some robot"
        results += "</p>"
        document.getElementById("advice").innerHTML = results;
      });
});

document.getElementById("monster").addEventListener("click", function(event) {
    var myurl = "https://api.quotable.io/random";
    fetch(myurl)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "<img src=https://robohash.org/" + getRandomInt(10000) + ".png?set=set2 " + "class=\'pic\'>"
        results += "<p class=\'quote\'>" + json.content;
        results += "<br>"
        results += " - some monster"
        results += "</p>"
        document.getElementById("advice").innerHTML = results;
      });
});


document.getElementById("kitten").addEventListener("click", function(event) {
    var myurl = "https://api.quotable.io/random";
    fetch(myurl)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "<img src=https://robohash.org/" + getRandomInt(10000) + ".png?set=set4 " + "class=\'pic\'>"
        results += "<p class=\'quote\'>" + json.content;
        results += "<br>"
        results += " - some kitten"
        results += "</p>"
        document.getElementById("advice").innerHTML = results;
      });
});


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
