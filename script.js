const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "AWW I LOVE YOUUUU U CAN DO IT!!!";
    gif.src="https://media2.giphy.com/media/ko6uvDPzpXw2zo2jiI/giphy.gif?cid=6c09b952defaazdlhbupp6jk3hc5bi7q0ti3a8vvpr2yozrv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random () + maxX)
    const randomY = Math.floor(Math.random () + maxY)

    noBtn.style.left = randomX + "px";  
    noBtn.style.top = randomY + "px" 
})