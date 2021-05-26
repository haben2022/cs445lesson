window.onload = loadPg;
function loadPg() {
  let inter;
  let lateTime;
  let newarr;
  animationMN();
  function animationMN() {
    let firstbt = document.getElementById("start");
    firstbt.onclick = startAnimation;

    let stopB = document.getElementById("stop");
    stopB.onclick = stopAnimation;

    let animalChoose = document.getElementById("animation");
    animalChoose.onchange = animationconvert;
    let choosesize = document.getElementById("fontsize");
    choosesize.onchange = changesizef;

    let turboCkBx = document.getElementById("turbo");
    turboCkBx.onclick = turboCkBxClicked;
  }
  
