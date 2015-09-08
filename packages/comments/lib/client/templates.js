
  Template.commentFormToggle.events({
    'click .btn-comment': function(e, t) {
      return Session.set('commentingOn', $(e.currentTarget).attr('doc'));
    },
    'click .btn-cancel-comment': function(e, t) {
      return Session.set('commentingOn', null);
    }
  });

  Template.commentFormToggle.destroyed = function() {
    return Session.set('commentingOn', null);
  };

  AutoForm.hooks({
    commentForm: {
      onSuccess: function(operation, result, template) {
        return Session.set('commentingOn', null);
      }
    }
  });

