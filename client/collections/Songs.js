// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  
  initialize: function() {
    //this.fetchPARSE();
  },
  
  fetchPARSE: function() {
    this.fetch({
      success: this.fetchSuccess,
      error: this.fetchError,
    });
  },

  fetchSuccess: function(collection, response) {
    // for (var result of response.results) {
    //   this.get('library').add(result);
      
    // }
    console.log('collection fetchSuccess', response);
  },
  
  fetchError: function(collection, response) {
    throw new Error('fetchError');
  }

});
