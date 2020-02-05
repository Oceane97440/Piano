(function() {
  // Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth
  const synth = new Tone.MembraneSynth().toMaster();

  const loop = new Tone.Loop(function(time) {
    //triggered every eighth note.
    console.log(time);
    synth.triggerAttackRelease('G4', '16n', '2n')
  }, "2n").start(0);

  /**
   * Play Controls
   */
  let playing = false;
  document.querySelector("body").addEventListener("click", function() {
    if (!playing) {
      Tone.Transport.start();
      playing = true;
    } else {
      Tone.Transport.stop();
    }
  });
})();