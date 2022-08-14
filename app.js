const colors = ["green", "red", "rgba(133, 122, 2000)", "#f15025"];
const btn = document.getElementById('mybtn');
const color = document.querySelector(".color");
btn.addEventListener("click", function(){
    const randomNum = getRandom();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});
function getRandom(){
    return Math.floor(Math.random() * colors.length);
}