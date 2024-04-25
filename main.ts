input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.LoopingInBackground)
})
