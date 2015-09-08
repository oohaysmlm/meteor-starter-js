
  Meteor.publish('notifications', function() {
    return Notifications.find({
      owner: this.userId
    });
  });

