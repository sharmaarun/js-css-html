const windowHandle = document.getElementById("WINDOW_HANDLE");
const minBtn = document.getElementById("MINIMIZE_BUTTON");
const closeBtn = document.getElementById("CLOSE_BUTTON");
const myWindow = document.getElementById("MY_WINDOW");
const winBody = document.getElementById("WIN_BODY");
const stats = document.getElementById("STATS");
let isBodyHidden = false;

let startDrag = false;
let mx = 0;
let my = 0;
const windowStyles = window.getComputedStyle(myWindow);

let dwxpx = 0;
let dwypy = 0;

windowHandle.addEventListener("mousedown", () => {
  if (!startDrag) {
    startDrag = true;
    dwxpx = mx - parseInt(windowStyles.getPropertyValue("left"));
    dwypy = my - parseInt(windowStyles.getPropertyValue("top"));
    console.log(dwxpx, dwypy);
  }
});
document.body.addEventListener("mouseup", () => {
  startDrag = false;
});

document.body.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  stats.innerHTML = `
  cwx : ${dwxpx}<br/>
  cwy: ${dwypy}<br/>
  Mx : ${mx}<br/>
  My: ${my}<br/>
  Draggin? : ${startDrag}<br/>
  `;

  if (startDrag) {
    myWindow.style.left = mx - dwxpx + "px";
    myWindow.style.top = my - dwypy + "px";
  }
});

minBtn.onclick = () => {
 if(isBodyHidden){
   winBody.style.display="block";
   isBodyHidden=false;
 } else {
   winBody.style.display="none";
   isBodyHidden=true;
 }
};

closeBtn.onclick = ()=>{
  myWindow.style.display="none";
}
