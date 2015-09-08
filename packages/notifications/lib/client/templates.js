
  var notificationClass, readNotification;

  notificationClass = function() {
    if (!this.read) {
      return 'unread-notification';
    } else {
      return '';
    }
  };

  readNotification = function() {
    return Notifications.read(this._id);
  };

  Template.notificationsDropdown.helpers({
    notificationClass: notificationClass,
    dropdownIcon: function() {
      if (this.icon) {
        return this.icon;
      } else {
        return 'bell';
      }
    },
    dropdownIconEmpty: function() {
      if (this.iconEmpty) {
        return this.iconEmpty;
      } else {
        return 'bell-o';
      }
    },
    hasNotifications: function() {
      return Notifications.find().count() > 0;
    }
  });

  Template.notificationsDropdown.events({
    'click .notification': readNotification
  });

  Template.notifications.helpers({
    notificationClass: notificationClass,
    ago: function() {
      return moment(this.date).fromNow();
    }
  });

  Template.notifications.events({
    'click .notification': readNotification
  });

