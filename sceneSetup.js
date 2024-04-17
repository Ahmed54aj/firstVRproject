
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
const leftController = document.querySelector('[oculus-touch-controls="hand: left"]');
const rightController = document.querySelector('[oculus-touch-controls="hand: right"]');
rightController.setAttribute('raycaster', 'objects: .buttons');
leftController.setAttribute('raycaster', 'objects: .buttons');
// Add event listener for triggerdown on the left controller
leftController.addEventListener('triggerdown', function() {
    const raycaster = leftController.components.raycaster;
    const bossText = document.getElementById('bossText');
    if (raycaster.intersectedEls.length > 0) {
        bossText.setAttribute('text', `value: button is clicked; color: #000`);
     } else {
        bossText.setAttribute('text', `value: button not clicked; color: #000`);
     }
});

// Add event listener for triggerdown on the right controller
rightController.addEventListener('triggerdown', function() {
    const raycaster = rightController.components.raycaster;
    const bossText = document.getElementById('bossText');
    if (raycaster.intersectedEls.length > 0) {
        bossText.setAttribute('text', `value: button is clicked; color: #000`);
     } else {
        bossText.setAttribute('text', `value: button not clicked; color: #000`);
     }
});

// Add event listener for gripdown on the left controller
leftController.addEventListener('gripdown', function() {
    const bossText = document.getElementById('bossText');
    bossText.setAttribute('text', `value: left gripdown; color: #000`);
});

// Add event listener for gripdown on the right controller
rightController.addEventListener('gripdown', function() {
    const bossText = document.getElementById('bossText');
    bossText.setAttribute('text', `value: right gripdown; color: #000`);
});
