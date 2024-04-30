
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




   AFRAME.registerComponent('update-fireball-position', {
    init: function () {
       this.isPinching = false;
    },
    tick: function () {
       if (this.isPinching) {
         this.el.setAttribute("position", `${pinchPosition.x} ${pinchPosition.y} ${pinchPosition.z}`);
       }
    }
   });
   

   const hand = document.getElementById("left-hand");
const fireball = document.getElementById("fireball");

// Add the custom component to the fireball
fireball.setAttribute('update-fireball-position', '');

document.querySelector('#leftHand').addEventListener('gesture-pinch', function (event) {
 fireball.setAttribute("scale", "1 1 1");
 fireball.emit("start-animation");
 // Set the isPinching flag to true
 fireball.components['update-fireball-position'].isPinching = true;
});

document.querySelector('#leftHand').addEventListener('gesture-end', function (event) {
 fireball.emit("stop-animation");
 fireball.setAttribute("scale", "0 0 0");
 // Set the isPinching flag to false
 fireball.components['update-fireball-position'].isPinching = false;
});
