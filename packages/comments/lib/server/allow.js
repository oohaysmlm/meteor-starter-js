
  Comments.allow({
    insert: function(userId, doc) {
      return doc.owner === userId;
    }
  });
