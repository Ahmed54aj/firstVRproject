
let bosses;
async function getBosses(bosses) {
    const response = await fetch('./bosses.json');
    bosses = await response.json();
    setBossCard(bosses);
}
getBosses(bosses);
function setBossCard(bosses) {
    // card image
    const floatingBossCard = document.getElementById('bossCard');
    floatingBossCard.setAttribute('material', 'src', bosses[0].image);
    //  text
    const bossText = document.getElementById('bossText');
    bossText.setAttribute('text', `value: ${bosses[0].name}; color: #000`);
}
// Select the left and right Oculus Touch controllers
// const leftController = document.querySelector('[oculus-touch-controls="hand: left"]');
// const rightController = document.querySelector('[oculus-touch-controls="hand: right"]');
// // Add event listener for triggerdown on the left controller
// leftController.addEventListener('triggerdown', function() {
//     const bossText = document.getElementById('bossText');
//         bossText.setAttribute('text', `value: button is clicked; color: #000`);
//         bossText.setAttribute('text', `value: button not clicked; color: #000`);
// });

// // Add event listener for triggerdown on the right controller
// rightController.addEventListener('triggerdown', function() {
//     const bossText = document.getElementById('bossText');
//         bossText.setAttribute('text', `value: button is clicked; color: #000`);
// });

// // Add event listener for gripdown on the left controller
// leftController.addEventListener('gripdown', function() {
//     const bossText = document.getElementById('bossText');
//     bossText.setAttribute('text', `value: left gripdown; color: #000`);
// });

// // Add event listener for gripdown on the right controller
// rightController.addEventListener('gripdown', function() {
//     const bossText = document.getElementById('bossText');
//     bossText.setAttribute('text', `value: right gripdown; color: #000`);
// });
const hand = document.getElementById("left-hand");
hand.addEventListener("hand-tracking-extras-ready", (evt) => {
 var jointsAPI = evt.detail.data.jointsAPI;
 var fistDetected = false;

 hand.addEventListener("hand-tracking-extras-gesture", (gestureEvent) => {
    if (gestureEvent.detail.gesture === "fist") {
      fistDetected = true;
      // Assuming you have a GLB object with the id "fireball"
      var fireball = document.getElementById("fireball");
      var wristPosition = jointsAPI.getWrist().getPosition();
      fireball.setAttribute("position", `${wristPosition.x} ${wristPosition.y} ${wristPosition.z}`);
      fireball.setAttribute("scale", "1 1 1");
    } else if (fistDetected && gestureEvent.detail.gesture === "open") {
      fistDetected = false;
      // Optionally, hide or reset the fireball object
    }
 });
});