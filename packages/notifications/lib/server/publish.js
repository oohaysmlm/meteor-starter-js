// Generated by CoffeeScript 1.10.0
(function() {
  Meteor.publish('notifications', function() {
    return Notifications.find({
      owner: this.userId
    });
  });

}).call(this);
