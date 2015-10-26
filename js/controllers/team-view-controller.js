var TeamView = new Team('');

var fetchJSON = new xhrHandler();
var user;
fetchJSON.request("GET", "http://vvvvvv.club/api/user").then(function(req){

});



var request = xhr.request('POST', 'http://vvvvvv.club/api/login',{username: 'admin', password: 'password'}).then(function(req){
  console.log(req);
})

var request = xhr.request('GET', 'http://vvvvvv.club/api/user').then(function(req){
  console.log(req);
TeamView.create_candidates(req);
});
