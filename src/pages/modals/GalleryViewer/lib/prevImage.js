const prevImage = (index, setIndex, setDirection) => {
  if (index > 0) {
    setDirection(-1);
    setIndex(index - 1);
  }
}

export { prevImage }