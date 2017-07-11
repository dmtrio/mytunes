// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    setInterval(function(){this.render()}.bind(this), 1000);
    // this.on('change', function() {
    //   this.render();
    // }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }

});
