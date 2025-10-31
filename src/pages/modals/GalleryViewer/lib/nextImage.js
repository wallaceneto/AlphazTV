const nextImage = (index, setIndex, galleryLenght) => {
  if (index < galleryLenght) {
    setIndex(index + 1);
  }
}

export { nextImage }