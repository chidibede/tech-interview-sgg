// Write a function that converts a string to title case
// chidi bede -> Chidi Bede
// CHIDI BEDE -Chidi Bede

module.exports = function titleCase(str) {
  // loop through the string
  // first character is also capitalized
  // any character after a space is capitalized

  let formattedString = str.toLowerCase();
  let titleCase = formattedString.split(" ").map((item) => {
    return item[0].toUpperCase() + item.substring(1);
  });
  return titleCase.join(" ");
};
