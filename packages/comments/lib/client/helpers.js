
  Template.registerHelper('CommentsByDoc', function(_id) {
    if (typeof window['Comments'] !== 'undefined') {
      return Comments.find({
        doc: _id
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch();
    }
  });

  Template.registerHelper('CommentsByUser', function(_id) {
    if (typeof window['Comments'] !== 'undefined') {
      return Comments.find({
        owner: _id
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch();
    }
  });

  Template.registerHelper('CommentsByCollection', function(collection) {
    var Comments, comments;
    if (typeof window['Comments'] !== 'undefined') {
      Comments = [];
      comments = window['Comments'].find({
        owner: Meteor.userId()
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch();
      collection = window[collection];
      _.each(comments, function(favorite) {
        if (collection.findOne({
          _id: favorite.doc
        })) {
          return Comments.push(collection.findOne({
            _id: favorite.doc
          }));
        }
      });
      return Comments;
    }
  });

  Template.registerHelper('commentCount', function(_id) {
    if (typeof window['Comments'] !== 'undefined') {
      return Comments.find({
        doc: _id
      }).fetch().length;
    }
  });

  Template.registerHelper('commentingOn', function(_id) {
    return Session.equals('commentingOn', _id);
  });

