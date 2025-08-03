function handleSlideResize(setSlidePerView, sm, md, xl) {
  if (window.innerWidth < 720) {
    setSlidePerView(sm)
  } else if (window.innerWidth < 1100) {
    setSlidePerView(md)
  } else {
    setSlidePerView(xl)
  }
}

export { handleSlideResize }