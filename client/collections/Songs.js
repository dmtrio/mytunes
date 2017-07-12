// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  
  initialize: function() {
    this.fetch();
  },
  
  
  // fetchPARSE: function() {
  //   console.log('col before', this);
  //   this.fetch({
  //     reset: true,
  //     success: this.fetchSuccess,
  //     error: this.fetchError,
  //   });
  // },
  
  parse: function(response) {
    return response.results;
  }

  // fetchSuccess: function(collection, response) {
  //   console.log('col after', collection);
  //   // for (var result of response.results) {
  //   //   this.get('library').add(result);
      
  //   // }
  //   console.log('collection fetchSuccess', response);
  // },
  
  // fetchError: function(collection, response) {
  //   throw new Error('fetchError');
  // }

});
