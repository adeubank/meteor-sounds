# MeteorSounds

A Meteor package to aid in pre-loading sound assets and playing audio files. Is built to work with Cordova and the low latency audio plugin. Provides methods to play, stop, and pre load all audio files. Perfect for games built on Meteor.

## Install

`meteor add adej:meteor-sounds`

## Usage

Meteor Sounds uses a method of low latency audio to preload audio files on apps built for Cordova. The plugin exposes a variable `MeteorSounds` to the platform `web.cordova`.

Include a settings.json file like so,
```
{
    "public" : {
        "sounds": {
            "soundFx" : {
                // sounds included in public directory are
                // added to the `application` directory
                // when building with cordova
                "soundId1" : "application/path/to/sound.wav"
            },
            "soundAudio" : {
                "soundId2" : "application/path/to/sound.wav"
            }
        }
    }
}
```

Then call,

```javascript
MeteorSounds.preloadAllAssets();
```

Pairing with iron router, you can do something like this.

```javascript
Router.route('/', {
  waitOn: function () {
    return function () {
      return MeteorSounds.assetsLoaded.get();
    }
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
});
```

#### Methods
| Methods | Description |
| ------- | ----------- |
| MeteorSounds.preloadAllAssets() | Preloads all audio files found in Meteor.setting.public.soundFx and Meteor.setting.public.soundAudio |
| MeteorSounds.play(sound) | Plays a audio file whose id is `sound` |
| MeteorSounds.stop(sound) | Stops an audio file whose id is `sound` |


#### Properties
| Properties | Description |
| ---------- | ----------- |
| MeteorSounds.assetsLoaded | ReactiveVar boolean that is set after all audio assets are loaded. |
