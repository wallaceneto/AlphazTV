const nextImage = (index, setIndex, galleryLenght, setDirection) => {
  if (index < galleryLenght) {
    setDirection(1);
    setIndex(index + 1);
  }
}

export { nextImage }