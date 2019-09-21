function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function changeButton(e) {
  const button = document.querySelector(".nav-button");
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    button.classList.add("active", "has-shadow");
    navbar.classList.add("active");
    navbar.classList.add("has-shadow");
  } else {
    button.classList.remove("active");
    navbar.classList.remove("active");
    navbar.classList.remove("has-shadow");
  }
  if (window.scrollY > 200) {
    button.classList.remove("active");
    button.classList.add("active-second");
  } else {
    button.classList.remove("active-second");
  }
  console.log(window.scrollY);
}

window.addEventListener("scroll", debounce(changeButton));
