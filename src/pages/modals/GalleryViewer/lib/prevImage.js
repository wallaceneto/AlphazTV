const prevImage = (index, setIndex) => {
  if (index > 0) {
    setIndex(index - 1);
  }
}

export { prevImage }