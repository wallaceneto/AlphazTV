const getCuriosities = (member, length, setCuriosities) => {
  let allCuriosities = [];

  for (let index = 0; index < length; index++) {
    allCuriosities.push(`MemberCuriosities.${member}-${index}`)
  }
  setCuriosities(allCuriosities);
}

export { getCuriosities };