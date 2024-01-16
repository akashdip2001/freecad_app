# music api ( no audio file )

copy the <script> only

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Sound</title>
</head>
<body>
  <script>
    // Create an AudioContext
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create an oscillator
    const oscillator = audioContext.createOscillator();

    // Set the oscillator type (sine wave)
    oscillator.type = 'sine';

    // Connect the oscillator to the audio context's destination (speakers)
    oscillator.connect(audioContext.destination);

    // Start the oscillator to play the sound
    oscillator.start();

    // Stop the oscillator after 2 seconds (adjust as needed)
    oscillator.stop(audioContext.currentTime + 2);
  </script>
  <h1>Welcome to My Website!</h1>
</body>
</html>
```

some modifications

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Sound</title>
</head>
<body>
  <script>
    // Create an AudioContext
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create an oscillator
    const oscillator = audioContext.createOscillator();

    // Choose the oscillator type (sine, square, sawtooth, triangle)
    oscillator.type = 'sine';

    // Set frequency in Hertz (adjust for desired pitch)
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // 440 Hz is the default for A4

    // Set volume (gain)
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Adjust between 0.0 and 1.0

    // Connect the oscillator to the gain node and the gain node to the audio context's destination (speakers)
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start the oscillator to play the sound
    oscillator.start();

    // Stop the oscillator after 2 seconds (adjust as needed)
    oscillator.stop(audioContext.currentTime + 2);
  </script>
  <h1>Welcome to My Website!</h1>
</body>
</html>
```

# with audio file

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Sound</title>
</head>
<body>
  <audio autoplay>
    <source src="welcome.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>
  <h1>Welcome to My Website!</h1>
</body>
</html>
```
