// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    context.on('add', function() {
      if (context.length === 1 ) {
        context.playFirst();
      }
    });
    context.on('ended', function() {
      context.shift();
      if (context.length >= 1) {
        context.playFirst();
      }
    });
    context.on('dequeue', function() {
      context.remove(context.where(this));
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
    // this.set('currentSong', this.at(0));
  },
});