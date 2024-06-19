const headerEl = document.querySelector("header")
addEventListener("scroll", _ => {
  if (scrollY > 0) {
    headerEl.classList.add("shadow-sm")
  } else {
    headerEl.classList.remove("shadow-sm")

  }
})