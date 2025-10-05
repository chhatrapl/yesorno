const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");
const img = document.getElementById("imgBox");

const messages = [
    "Fir Se Soch Le😁",
    "Man Bhi Ja😒",
    "Ni Manegi?🤨",
    "Man Ja Na😟", 
    "😭😭",
    "Karti Reh Try😁"
];

const images = [
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "5.1.jpg",
    "7.jpg",
    "7.jpg"
 ];

let index=0;

noBtn.addEventListener("touchstart",()=>{
    let randomX = Math.random()*(window.innerWidth-noBtn.offsetWidth);
    let randomY = Math.random()*(window.innerHeight-noBtn.offsetHeight);


    noBtn.style.position="fixed";
    noBtn.style.left=`${randomX}px`;
    noBtn.style.top=`${randomY}px`;
    noBtn.style.transition="all 0.3s ease"


    msg.textContent=messages[index];
    img.src=images[index];

    if(index < messages.length-1){
        index++
    };

});


yesBtn.addEventListener("touchstart", ()=>{
    img.src="jin.jpg";
    msg.textContent="";
    document.getElementById("h4").textContent="I LIKE YOU 2😁🌺";
    yesBtn.style.display="none";
    noBtn.style.display="none";


})






function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
