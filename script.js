// MUSIC fade-in
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if(!music) return;
  music.volume = 0;
  music.play();
  let v = 0;
  const fade = setInterval(()=>{
    if(v < 0.25){
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  },200);
},{ once:true });

// NOTE OPEN / CLOSE
document.addEventListener("DOMContentLoaded", ()=>{

  const card = document.getElementById("secretCard");
  const overlay = document.getElementById("noteOverlay");
  const closeBtn = document.getElementById("closeNote");

  card.addEventListener("click", ()=>{
    overlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", ()=>{
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", (e)=>{
    if(e.target === overlay){
      overlay.style.display = "none";
    }
  });

});

function blowCandle(e){
  const candle = e.currentTarget.querySelector(".candle");
  if(candle.classList.contains("off")) return;
  candle.classList.add("off");
}
document.querySelectorAll(".balloon").forEach(balloon=>{
  balloon.addEventListener("click",()=>{
    balloon.classList.add("pop");
    setTimeout(()=>balloon.remove(),200);
  });
});

