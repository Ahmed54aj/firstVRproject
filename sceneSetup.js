
let bosses;
async function getBosses(bosses) {
    const response = await fetch('./bosses.json');
    bosses = await response.json();
    setupScene(bosses);
}
getBosses(bosses);

function setupScene(bosses) {
    setBossCard(bosses);
}


function setBossCard(bosses) {
    // card image
    const floatingBossCard = document.getElementById('bossCard');
    floatingBossCard.setAttribute('material', 'src', bosses[0].image);
    //  text
    const bossText = document.getElementById('bossText');
    bossText.setAttribute('text', `value: ${bosses[0].name}; color: #000`);
}

AFRAME.registerComponent('rotate-camera-with-thumbstick', {
    init: function () {
       this.el.addEventListener('thumbstickmoved', this.rotateCamera.bind(this));
    },
   
    rotateCamera: function (event) {
       // Assuming the thumbstick values are normalized between -1 and 1
       var rotationSpeed = 0.01; // Adjust this value to change the rotation speed
       var rotationAmount = event.detail.x * rotationSpeed;
   
       // Get the camera entity
       var cameraEl = document.querySelector('a-camera');
   
       // Apply rotation to the camera
       cameraEl.object3D.rotation.y += rotationAmount;
    }
   });
   