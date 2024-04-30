
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




   
   

   const hand = document.getElementById("left-hand");
const fireball = document.getElementById("fireball");

// Add the custom component to the fireball
fireball.setAttribute('update-fireball-position', '');

document.querySelector('#leftHand').addEventListener('pinchstarted', function (event) {
 fireball.setAttribute("scale", "1 1 1");
 fireball.position.set(1, 2, 1);
 fireball.emit("start-animation");
});

document.querySelector('#leftHand').addEventListener('pinchended', function (event) {
 fireball.emit("stop-animation");
 fireball.setAttribute("scale", "0 0 0");
});
