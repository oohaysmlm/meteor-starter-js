
  Router.map(function() {
    this.route('notifications', {
      path: '/notifications',
      waitOn: function() {
        return [Meteor.subscribe('notifications')];
      }
    });
    return this.route('messages', {
      path: '/messages/:_id',
      layout: 'notifications'
    });
  });

