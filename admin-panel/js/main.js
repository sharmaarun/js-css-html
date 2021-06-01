let leftSectionVisible = true;

// add event listeners

// left section
const leftSection = document.getElementById("LEFT_SECTION");
const menuButton = document.getElementById("MAIN_MENU_BUTTON");

menuButton.onclick = () => {
  if (leftSectionVisible) {
    leftSectionVisible = false;
    leftSection.classList.add("hidden")
  } else {
    leftSectionVisible = true;
    leftSection.classList.remove("hidden")
  }
};
