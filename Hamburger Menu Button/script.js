/* ############################## */
/* DEFAULT ICON STARTS HERE */
/* ############################## */
/* Create a const varaible called icon. */
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  /* With the console log, we can read if the .menu-icon div
  has our .open-position class or not. Pretty cool! */
  console.log(menuIcon);

  /* If our ".menu-icon" div does NOT contain ".open-position"...*/
  if (!menuIcon.classList.contains("open-position")) {
    /* Add ".open-position" class to the div. */
    menuIcon.classList.add("open-position");
  } else {
    /* Else, remove it. */
    menuIcon.classList.remove("open-position");
  }
});

/* ############################## */
/* 2ND ICON STARTS HERE */
/* ############################## */
const menuIcon2 = document.querySelector(".menu-icon2");
menuIcon2.addEventListener("click", () => {
  /* With the console log, we can read if the .menu-icon div
  has our .open-position class or not. Pretty cool! */
  console.log(menuIcon2);

  /* If our ".menu-icon" div does NOT contain ".open-position"...*/
  if (!menuIcon2.classList.contains("open-position2")) {
    /* Add ".open-position" class to the div. */
    menuIcon2.classList.add("open-position2");
  } else {
    /* Else, remove it. */
    menuIcon2.classList.remove("open-position2");
  }
});

/* ############################## */
/* 3RD ICON STARTS HERE */
/* ############################## */
const menuIcon3 = document.querySelector(".menu-icon3");
menuIcon3.addEventListener("click", () => {
  /* With the console log, we can read if the .menu-icon div
  has our .open-position class or not. Pretty cool! */
  console.log(menuIcon3);

  /* If our ".menu-icon" div does NOT contain ".open-position"...*/
  if (!menuIcon3.classList.contains("open-position3")) {
    /* Add ".open-position" class to the div. */
    menuIcon3.classList.add("open-position3");
  } else {
    /* Else, remove it. */
    menuIcon3.classList.remove("open-position3");
  }
});
