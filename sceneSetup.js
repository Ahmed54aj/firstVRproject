
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
    
    // Add the custom component to the fireball
    fireball.setAttribute('update-fireball-position', '');
    
    document.getElementById("left-hand").addEventListener('pinchstarted', function (event) {
     fireball.setAttribute("scale", "1 1 1");
     fireball.position.set(event.target.position);
     fireball.emit("start-animation");
    });
    
    document.getElementById('left-hand').addEventListener('pinchended', function (event) {
     fireball.emit("stop-animation");
     fireball.setAttribute("scale", "0 0 0");
    });
 }  
   


