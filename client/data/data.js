// data.js - Defines an array of data regarding song files and their accompanying details.
var songData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
    title: 'Age Ain\'t Nothing But A Number',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
    title: 'Hot Like Fire',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
    title: 'If Your Girl Only Knew',
    artist: 'Aaliyah',
  }
];
// var fetchAJAX;
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
//   type: 'GET',
//   contentType: 'application/json',
//   // data: data,
//   success: function (data) {
//     console.log('Fetched music', data['results']);
//     songData = [];
//     for (var song of data['results']) {
//       songData.push(song);
//     }
//   },
//   error: function () {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('Failed to get music');
//   }
// });
// // setTimeout(function(){console.log(fetchAJAX)},2000);
// Backbone.ajax({
//   url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
//   type: 'GET',
//   contentType: 'application/json',
//   // data: data,
//   success: function (data) {
//     console.log('Fetched music', data['results']);
//     songData = [];
//     for (var song of data['results']) {
//       songData.push(song);
//     }
//   },
//   error: function () {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('Failed to get music');
//   }

//     dataType: "jsonp",
//     url: "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitterapi&count=25",
//     data: "",
//     success: function(val){
//         collection.add(val);  //or reset
//         console.log(collection);
//     }
// });
