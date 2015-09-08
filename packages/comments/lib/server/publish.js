
  Meteor.publish('comments', function() {
    return Comments.find();
  });

  Meteor.publish('commentsByDoc', function(_id) {
    return Comments.find({
      doc: _id
    });
  });

  Meteor.publish('commentsByUser', function(_id) {
    return Favorites.find({
      owner: _id
    });
  });

