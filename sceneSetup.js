
let bosses;
async function getBosses(bosses) {
    const response = await fetch('./bosses.json');
    bosses = await response.json();
    setupScene(bosses);
}
getBosses(bosses);

function setupScene(bosses) {
    document.querySelector('[oculus-touch-controls="hand: left"]').addEventListener('axismove', function (event) {
        var x = event.detail.x;
        var y = event.detail.y;
        var rig = document.querySelector('#rig'); 
        rig.setAttribute('position', {
          x: rig.getAttribute('position').x + x * 0.1, 
          y: rig.getAttribute('position').y,
          z: rig.getAttribute('position').z + y * 0.1
        });
      });
    
      AFRAME.registerComponent('move-camera-rig', {
        init: function () {
            this.el.addEventListener('thumbstickmoved', (event) => {
                var rig = document.querySelector('#rig');
                var delta = event.detail.delta;
                rig.object3D.position.x += delta.x * 0.1;
                rig.object3D.position.z += delta.y * 0.1;
            });
        }
    });
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

