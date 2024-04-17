// Select the left and right Oculus Touch controllers
const leftController = document.querySelector('[oculus-touch-controls="hand: left"]');
const rightController = document.querySelector('[oculus-touch-controls="hand: right"]');

// Add event listener for trigger down on the left controller
leftController.addEventListener('triggerdown', function() {
 console.log('Left trigger pressed');
 // Add your logic here for when the left trigger is pressed
});

// Add event listener for trigger up on the left controller
leftController.addEventListener('triggerup', function() {
 console.log('Left trigger released');
 // Add your logic here for when the left trigger is released
});

// Add event listener for trigger down on the right controller
rightController.addEventListener('triggerdown', function() {
 console.log('Right trigger pressed');
 // Add your logic here for when the right trigger is pressed
});

// Add event listener for trigger up on the right controller
rightController.addEventListener('triggerup', function() {
 console.log('Right trigger released');
 // Add your logic here for when the right trigger is released
});
