
  Notifications.allow({
    insert: function(userId, doc) {
      return doc.owner === userId;
    },
    update: function(userId, doc, fieldNames, modifier) {
      return doc.owner === userId && fieldNames.length === 1 && fieldNames[0] === 'read';
    },
    remove: function(userId, doc) {
      return doc.owner === userId;
    }
  });
