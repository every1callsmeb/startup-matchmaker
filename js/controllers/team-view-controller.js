var TeamView = new Team('');

var fetchJSON = new xhrHandler();
var user;
fetchJSON.request("GET", "http://vvvvvv.club/api/user").then(function(req){
  console.log(req);
});
