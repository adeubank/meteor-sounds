MeteorSounds = {};

MeteorSounds.assetsLoaded = new ReactiveVar(false);

MeteorSounds.preloadAllAssets = function () {
  LowLatencyAudio = window.plugins.LowLatencyAudio;

  Meteor.settings = Meteor.settings || {};

  _.defaults(Meteor.settings, {
    public: {
      sounds: {
        soundFx: {},
        soundAudio: {}
      }
    }
  });

  _.each(Meteor.settings.public.sounds.soundFx, function (soundFx, soundFxId) {
    LowLatencyAudio.preloadFX(soundFxId, soundFx, function () {
    }, function (err) {
      console.error(err);
    });
  });

  _.each(Meteor.settings.public.sounds.soundAudio, function (soundAudio, soundAudioId) {
    LowLatencyAudio.preloadAudio(soundAudioId, soundAudio, 1, 1, function () {
    }, function (err) {
      console.error(err);
    });
  });

  MeteorSounds.assetsLoaded.set(true);
};

MeteorSounds.play = function (sound) {
  window.plugins.LowLatencyAudio.play(sound);
};

MeteorSounds.loop = function (sound) {
  window.plugins.LowLatencyAudio.loop(sound);
};

MeteorSounds.stop = function (sound) {
  window.plugins.LowLatencyAudio.stop(sound);
};
