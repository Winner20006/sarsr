const cards = document.querySelectorAll('.card__image-container');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
}

function applyRandomGradient(card) {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();

        const gradient = `conic-gradient(
            from 0deg,
            ${color1} 0deg 90deg,
            ${color2} 90deg 180deg,
            ${color3} 180deg 270deg,
            ${color4} 270deg 360deg
        )`;

    card.style.setProperty('--random-gradient', gradient);
}

// Apply random gradient to all cards on page load and hover
cards.forEach(card => {
    applyRandomGradient(card); // Apply gradient on page load
    card.addEventListener('mouseenter', () => applyRandomGradient(card)); // Apply gradient on hover
});




function qs(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }
  
  const seccs = qs(".secc", true);
  const difftime = qs(".difftime");
  const line = qs(".line");
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;
  
  function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const difftimeRect = difftime.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  
    const dist = targetY - difftimeRect.top;
    console.log(dist);
  
    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }
  
    if (dist > difftime.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }
  
    seccs.forEach((item) => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);
  
      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add("show-me");
      }
    }); // console.log(up, down);
  
    prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = "block";
  window.addEventListener("scroll", scrollHandler);
  