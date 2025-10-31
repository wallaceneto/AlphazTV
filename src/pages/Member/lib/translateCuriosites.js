const translateCuriosites = (fullText, t) => {
  const curiositie = fullText.split(': ')
  const label = curiositie[0];

  let translatorLabel = "";
  switch (label) {
    case "Hometown":
      translatorLabel = "Cities.";
      break;
    case "Color":
      translatorLabel = "Colors.";
      break;
    case "Zodiac Sign":
      translatorLabel = "Zodiac.";
      break;
  }

  return `${t(label)} ${t(translatorLabel + curiositie[1])}`
}

export { translateCuriosites }