if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({

    counter: function () {
      return Session.get('counter');
    },

    assetsLoaded: function () {
      if (Meteor.isCordova)
        return MeteorSounds.assetsLoaded.get();
      else
        return '';
    },

    isCordova: function () {
      return Meteor.isCordova;
    }
  });

  Template.hello.events({
    'click #click': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      MeteorSounds.play('click')
    },
    'click #triumph' : function () {
      MeteorSounds.play('triumph')
    },
    'click #stop' : function () {
      MeteorSounds.stop('triumph');
    }
  });
}


if (Meteor.isCordova) {
  Meteor.startup(function () {
    MeteorSounds.preloadAllAssets();
  });
}