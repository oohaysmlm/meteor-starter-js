
  AutoForm.hooks({
    commentForm: {
      onError: function(operation, error, template) {
        return sAlert.error(error);
      },
      formToDoc: function(doc, ss, formId) {
        doc.doc = Template.instance().data.commentDocId;
        doc.owner = Meteor.userId();
        return doc;
      }
    }
  });

