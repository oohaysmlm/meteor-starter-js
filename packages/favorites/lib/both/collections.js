
  var FavoritesSchemas;

  this.Favorites = new Meteor.Collection('favorites');

  FavoritesSchemas = new SimpleSchema({
    doc: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    owner: {
      type: String,
      autoValue: function() {
        if (this.isInsert) {
          return Meteor.userId();
        }
      }
    },
    createdAt: {
      type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        }
      }
    }
  });

  Favorites.attachSchema(FavoritesSchemas);

