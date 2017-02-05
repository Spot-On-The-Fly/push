var spotifyAPI = require('spotify-web-api-node');
var playlist = require('./playlist.json')
var spot = new spotifyAPI({
    clientId : "cab4b5b99f96426e9dfaf76d268f3871",
   clientSecret: "3000734987d6434a963489d900c65641",
   redirectUri: "http%3A%2F%2F129.31.218.236%3A8080%2Fauth%2Fconfirm"
});

var host = {"token":'BQCvtTwZHRV98nIyKHuo5iPe0EeuHISiZrI-Y6hStfTCENCSdGM2pgslqOEgkluL3SKqz4_ofwHOsj7i6MS2bPTmyVoCCg_cWqvGUM0oDjfnyTKZmKAWpRE1ZXcQjGKKk75SuvJRQBEe3TE60NVuf6-g-UNO9GFvOsmmsp-nWLTUagMP1RhINUCljvXbg7Lh6qVgGTqFHwgYkOVEPuyCYu7Lfj_mCSh-71YLM0exkvhuS_M5HQMB5XU', "id":'1161086985'};
spot.setAccessToken(host.token);
    spot.addTracksToPlaylist(host.id, playlist.id, ["spotify:track:"+"2HklyUw3TR56nVyVJAIhw5"]).then(function(data) {
          console.log('Added ' +  +' to the ' + playlist.name);
    }).catch(function(err) {
      console.log('Something went wrong!', err.message);
    });
