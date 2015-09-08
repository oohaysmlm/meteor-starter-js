
  Template.registerHelper('favoritesByDoc', function(_id) {
    return Favorites.find({
      doc: _id
    });
  });

  Template.registerHelper('myFavorites', function() {
    return Favorites.find({
      owner: Meteor.userId()
    });
  });
