const translateCuriosites = (fullText, t) => {
  const curiositie = fullText.split(': ')

  const label = curiositie[0];
  const value = label === 'Hometown' ? `Cities.${curiositie[1]}` : `Colors.${curiositie[1]}`;

  return `${t(label)} ${t(value)}`
}

export { translateCuriosites }