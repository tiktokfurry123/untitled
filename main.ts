input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.LoopingInBackground)
})
