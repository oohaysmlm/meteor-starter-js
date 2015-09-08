
  Template.registerHelper('Notifications', function(options) {
    var limit, order;
    if (typeof window['Notifications'] !== 'undefined') {
      if (options instanceof Spacebars.kw && options.hash) {
        if (options.hash.limit != null) {
          limit = options.hash.limit;
        }
        if (options.hash.unreadFirst != null) {
          order = {
            read: 1,
            date: -1
          };
        }
      } else {
        limit = 0;
        order = {
          date: -1
        };
      }
      return Notifications.find({}, {
        limit: limit,
        sort: order
      }).fetch();
    }
  });

  Template.registerHelper('notificationCount', function() {
    if (typeof window['Notifications'] !== 'undefined') {
      return Notifications.find({
        read: false
      }).count();
    }
  });

