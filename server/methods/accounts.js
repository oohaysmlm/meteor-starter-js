// Generated by CoffeeScript 1.10.0

  Meteor.methods({
    deleteAccount: function(userId) {
      if (this.userId === userId) {
        return Meteor.users.remove({
          _id: this.userId
        });
      }
    }
  });


