var spotifyAPI = require('spotify-web-api-node');
var playlist = require('./playlist.json')
console.log(playlist);
var auth = require('./auth');
var spot = new spotifyAPI();
var host = auth.get_host();

exports.add = function(song){

spot.setAccessToken(host.token);
    spot.addTracksToPlaylist(host.id, playlist.id, ["spotify:track:"+song.id],
        {}).then(function(data) {
          console.log('Added ' + song.name +' to the ' + playlist.name);
    }).catch(function(err) {
      console.log('Something went wrong!', err.message);
    });
}

exports.remove = function(song){


spot.setAccessToken(host.token);
    spot.removeTracksFromPlaylist(host.id, playlist.id, ["spotify:track:"+song.id],
        {}).then(function(data) {
          console.log('Removed ' + song.name +' from the ' + playlist.name);
    }).catch(function(err) {
      console.log('Something went wrong!', err.message);
    });
}
