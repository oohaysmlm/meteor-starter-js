
  Meteor.publish('myFavorites', function() {
    return Favorites.find({
      owner: this.userId
    });
  });
