/**
 * Renvoi le style du theme
 * @param theme
 * @returns
 */
function getThemeStyle(theme: string) {
  if (theme === "light") {
    return {
      //bg
      bgBlueColor: "#2196f3",
      bgBlueOpacity: "10%",
      bgColor: "#efefef",
      //text
      textMainColor: "#111111",
      textSecondColor: "#aaabab",
      //box
      boxBgColor: "#fafafa",
      boxShadowColor: "#aaabab",
      boxShadowWidth: 0,
      boxShadowHeight: 2,
      boxShadowBlur: 4,
      boxElevation: 5,
      //error
      errorColor: "#e74c3c",
    };
  } else {
    return {
      //bg
      bgBlueColor: "#3d5afe",
      bgBlueOpacity: "20%",
      bgColor: "black",
      //text
      textMainColor: "#fafafa",
      textSecondColor: "gray",
      //box
      boxBgColor: "#1d1d1d",
      boxShadowColor: "none",
      boxShadowWidth: 0,
      boxShadowHeight: 0,
      boxShadowBlur: 0,
      boxElevation: 0,
      //error
      errorColor: "#e74c3c",
    };
  }
}

/**
 * Renvoi le label du theme en cours
 * @returns
 */
function getThemeLabel() {
  const d = new Date();
  const min = 7;
  const max = 20;
  if (d.getHours() >= min && d.getHours() <= max) {
    return "light";
  } else {
    return "dark";
  }
}

export const styleTheme = getThemeStyle(getThemeLabel());
