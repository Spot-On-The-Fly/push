var spotifyAPI = require('spotify-web-api-node');
var playlist = require('./playlist.json')
console.log(playlist);
// var auth = require('./auth');
var spot = new spotifyAPI();
// var host = auth.get_host();
exports.add = function(song){
var host = {"token":'BQCvtTwZHRV98nIyKHuo5iPe0EeuHISiZrI-Y6hStfTCENCSdGM2pgslqOEgkluL3SKqz4_ofwHOsj7i6MS2bPTmyVoCCg_cWqvGUM0oDjfnyTKZmKAWpRE1ZXcQjGKKk75SuvJRQBEe3TE60NVuf6-g-UNO9GFvOsmmsp-nWLTUagMP1RhINUCljvXbg7Lh6qVgGTqFHwgYkOVEPuyCYu7Lfj_mCSh-71YLM0exkvhuS_M5HQMB5XU', "id":'1161086985'};
spot.setAccessToken(host.token);
    spot.addTracksToPlaylist(host.id, playlist.id, ["spotify:track:"+song.id],
        {}).then(function(data) {
          console.log('Added ' + song.name +' to the ' + playlist.name);
    }).catch(function(err) {
      console.log('Something went wrong!', err.message);
    });
}
