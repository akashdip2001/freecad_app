
// Function to lock the screen orientation
function lockScreenOrientation() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait-primary')
            .then(function() {
                console.log('Screen orientation locked successfully');
            })
            .catch(function(error) {
                console.error('Failed to lock screen orientation: ' + error);
            });
    }
}

// Call the function to lock the screen orientation when the app loads
lockScreenOrientation();
