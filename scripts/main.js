function clickScroll(type) {
    let nextOrPrevious = type;
    if (picsCont.scrollLeft == picsCont.scrollLeftMax) {
      console.log("before", picsCont.scrollLeft);
      //THIS DOES NOT WORK. PLEASE HELP!
      picsCont.scrollLeft = 0;
    }
  
    if (nextOrPrevious == "next") {
      picsCont.scrollLeft += pictureWidth + 4;
    } else {
      picsCont.scrollLeft -= pictureWidth + 4;
    }
  }
  
  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");
  const picture = document.querySelector("img");
  const pictureWidth = picture.clientWidth;
  const picsCont = document.querySelector(".pictures-container");
  
  next.addEventListener("click", () => clickScroll("next"));
  previous.addEventListener("click", () => clickScroll("previous"));
  
