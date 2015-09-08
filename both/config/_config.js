
  this.Config = {
    name: 'Bit Tiger',
    title: function() {
      return TAPi18n.__('configTitle');
    },
    subtitle: function() {
      return TAPi18n.__('configSubtitle');
    },
    logo: function() {
      return '<b>2' + this.name + '</b>';
    },
    footer: function() {
      return this.name + ' - Copyright ' + new Date().getFullYear();
    },
    emails: {
      from: 'noreply@' + Meteor.absoluteUrl()
    },
    blog: 'http://bittiger.io',
    about: 'http://bittiger.io',
    username: false,
    homeRoute: '/dashboard',
    socialMedia: [['https://www.facebook.com/steve.kehoe.98', 'facebook'], ['https://twitter.com/sjkdev1523', 'twitter'], ['https://github.com/oohaysmlm', 'github']]
  };

  Avatar.options = {
    customImageProperty: 'profile.picture'
  };

  Meteor.startup(function() {
    if (Meteor.isClient) {
      return TAPi18n.setLanguage('en');
    }
  });

