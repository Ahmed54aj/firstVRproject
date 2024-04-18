
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
function fixOculusTouchPose() {
    // Adjust the raycaster direction for the Oculus Touch controls
    AFRAME.components['laser-controls'].Component.prototype.config['oculus-touch-controls'].raycaster.direction.y = 0;
   
    document.addEventListener("DOMContentLoaded", function () {
       document.querySelector("a-scene")
         .addEventListener("loaded", function fixModelPoses() {
           Array.from(document.querySelectorAll('[oculus-touch-controls]'))
             .filter(el => el.components['oculus-touch-controls'].controllerPresent)
             .forEach(el => {
               el.addEventListener('model-loaded', () => {
                 // Align the controller model with the raycaster
                 var mesh = el.getObject3D('mesh');
                 mesh.rotateX(Math.PI / 4);
                 mesh.translateY(0.06);
               });
             });
       });
    });
   }
   
   // Call the function to apply the fix
   fixOculusTouchPose();