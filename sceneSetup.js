
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


const leftHand = document.getElementById("left-hand");
const fireball = document.getElementById("fireball");
    leftHand.addEventListener('gripdown', function (event) {
    fireball.position.set(event.target.position);
     fireball.setAttribute("scale", "1 1 1");
    //  fireball.emit("start-animation");
     bossText.setAttribute('text', `value: left trigger down; color: #000`);
    });
    leftHand.addEventListener('gripup', function (event) {
    //  fireball.emit("stop-animation");
     fireball.setAttribute("scale", "0 0 0");
     bossText.setAttribute('text', `value: left trigger up; color: #000`);
    });
