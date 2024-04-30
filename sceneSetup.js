
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
    setupHandEvents();
}




 function setupHandEvents() {
    const hand = document.getElementById("left-hand");
    const fireball = document.getElementById("fireball");
    hand.addEventListener('pinchstarted', function (event) {
    fireball.position.set(event.target.position);
     fireball.setAttribute("scale", "1 1 1");
     fireball.emit("start-animation");
     bossText.setAttribute('text', `value: left hand pinch; color: #000`);
    });
    
    hand.addEventListener('pinchended', function (event) {
     fireball.emit("stop-animation");
     fireball.setAttribute("scale", "0 0 0");
     bossText.setAttribute('text', `value: left hand let go; color: #000`);
    });
 }  
   


