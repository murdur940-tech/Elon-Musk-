
// SHAKE LOGOS

document.querySelectorAll(".shake-object").forEach(logo=>{
logo.addEventListener("mousedown",()=>logo.classList.add("shaking"));
logo.addEventListener("mouseup",()=>logo.classList.remove("shaking"));
logo.addEventListener("mouseleave",()=>logo.classList.remove("shaking"));
});

// 🚀 ROCKET LAUNCH

const rocket=document.getElementById("rocket");

if(rocket){
rocket.addEventListener("click",()=>{
rocket.classList.add("launch");
});
}