
  Meteor.methods({
    readAllNotifications: function() {
      return Notifications.update({
        read: false
      }, {
        $set: {
          read: true
        }
      }, {
        multi: true
      });
    }
  });

