const workBtn = document.getElementById("work");
const dropDown = document.getElementById("menuItems");

workBtn.addEventListener("mouseover", () => {
  dropDown.style.visibility = "visible";
})
dropDown.addEventListener("mouseover", () => {
  dropDown.style.visibility = "visible";
})
workBtn.addEventListener("mouseout", () => {
  dropDown.style.visibility = "hidden";
})
dropDown.addEventListener("mouseout", () => {
  dropDown.style.visibility = "hidden";
})

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const menuItem1 = document.getElementById("menuItem1");
const menuItem2 = document.getElementById("menuItem2");
const menuItem3 = document.getElementById("menuItem3");
const menuItem4 = document.getElementById("menuItem4");
const menuItem5 = document.getElementById("menuItem5");

home.addEventListener("click", () => {
  home.style.color = "#626993";
  about.style.color = "";
  work.style.color = "";
  contact.style.color = "";
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
})
about.addEventListener("click", () => {
  home.style.color = "";
  about.style.color = "#626993";
  work.style.color = "";
  contact.style.color = "";
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
})
contact.addEventListener("click", () => {
  home.style.color = "";
  about.style.color = "";
  work.style.color = "";
  contact.style.color = "#626993";
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
})


menuItem1.addEventListener("click", () => {
  menuItem1.style.color = "#626993";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
  home.style.color = "";
  about.style.color = "";
  contact.style.color = "";
})
menuItem2.addEventListener("click", () => {
  menuItem1.style.color = "";
  menuItem2.style.color = "#626993";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
  home.style.color = "";
  about.style.color = "";
  contact.style.color = "";
})
menuItem3.addEventListener("click", () => {
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "#626993";
  menuItem4.style.color = "";
  menuItem5.style.color = "";
  home.style.color = "";
  about.style.color = "";
  contact.style.color = "";
})
menuItem4.addEventListener("click", () => {
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "#626993";
  menuItem5.style.color = "";
  home.style.color = "";
  about.style.color = "";
  contact.style.color = "";
})
menuItem5.addEventListener("click", () => {
  menuItem1.style.color = "";
  menuItem2.style.color = "";
  menuItem3.style.color = "";
  menuItem4.style.color = "";
  menuItem5.style.color = "#626993";
  home.style.color = "";
  about.style.color = "";
  contact.style.color = "";
})

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
let clickCounter = 0;
let sum = 0;
let time = 5000;
dot1.style.backgroundColor = "gray";

function clickAddCount() {
  clickCounter += 1;
  console.log(clickCounter);

  if (clickCounter == 1) {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "gray";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "";
  } else if (clickCounter == 2) {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "gray";
    dot4.style.backgroundColor = "";
  } else if (clickCounter == 3) {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "gray";
  } else if (clickCounter == 0) {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    dot1.style.backgroundColor = "gray";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "";
  } else {
    clickCounter = 3;
  }
}
function clickSubCount() {

  clickCounter -= 1;
  console.log(clickCounter);

  if (clickCounter == 1) {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "gray";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "";
  } else if (clickCounter == 2) {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "gray";
    dot4.style.backgroundColor = "";
  } else if (clickCounter == 3) {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    dot1.style.backgroundColor = "";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "gray";
  } else if (clickCounter == 0) {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    dot1.style.backgroundColor = "gray";
    dot2.style.backgroundColor = "";
    dot3.style.backgroundColor = "";
    dot4.style.backgroundColor = "";
  } else {
    clickCounter = 0;
  }
}

rightArrow.addEventListener("click", clickAddCount);
leftArrow.addEventListener("click", clickSubCount);


dot1.addEventListener("click", () => {
  clickCounter = 0;
  image1.style.display = "block";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  dot1.style.backgroundColor = "gray";
  dot2.style.backgroundColor = "";
  dot3.style.backgroundColor = "";
  dot4.style.backgroundColor = "";
})
dot2.addEventListener("click", () => {
  clickCounter = 1;
  image1.style.display = "none";
  image2.style.display = "block";
  image3.style.display = "none";
  image4.style.display = "none";
  dot1.style.backgroundColor = "";
  dot2.style.backgroundColor = "gray";
  dot3.style.backgroundColor = "";
  dot4.style.backgroundColor = "";
})
dot3.addEventListener("click", () => {
  clickCounter = 2;
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "block";
  image4.style.display = "none";
  dot1.style.backgroundColor = "";
  dot2.style.backgroundColor = "";
  dot3.style.backgroundColor = "gray";
  dot4.style.backgroundColor = "";
})
dot4.addEventListener("click", () => {
  clickCounter = 3;
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
  dot1.style.backgroundColor = "";
  dot2.style.backgroundColor = "";
  dot3.style.backgroundColor = "";
  dot4.style.backgroundColor = "gray";
})


function moveRight() {

  do {
    for (let i = 0; i < 1; i++) {
      setTimeout(clickAddCount, time);
      sum += 1;
      time += 5000;
    }
  }
  while (sum < 4);
}
function moveLeft() {

  do {
    for (let i = 0; i < 1; i++) {
      setTimeout(clickSubCount, time);
      sum -= 1;
      time += 5000;
    }
  }
  while (sum > 0);

}
function loopPictures() {
  for (let i = 0; i < 10; i++) {
      moveRight();
      moveLeft();
  }
}

//figure out how to stop loop when click the arrow buttons
function stopLoop() {
  clearTimeout(clickAddCount);
  clearTimeout(clickSubCount);
}


loopPictures()

