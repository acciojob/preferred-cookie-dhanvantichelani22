//your JS code here. If required.
const fontSizeIp = document.getElementById("fontsize");
const fontColorIp = document.getElementById("fontcolor");
const SaveBtn = document.querySelector("input[type='submit']");
// Load saved preferences from cookies
if (document.cookie) {
  const preferences = document.cookie.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key.trim()] = value.trim();
    return acc;
  }, {});

  if (preferences.fontSize) {
    fontSizeIp.value = preferences.fontSize;
    document.documentElement.style.setProperty("--fontsize", preferences.fontSize + "px");
  }

  if (preferences.fontColor) {
    fontColorIp.value = preferences.fontColor;
    document.documentElement.style.setProperty("--fontcolor", preferences.fontColor);
  }
}

// Save preferences to cookies on form submit
SaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const fontSize = fontSizeIp.value;
  const fontColor = fontColorIp.value;
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
  document.cookie = `fontSize=${fontSize}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
  document.cookie = `fontColor=${fontColor}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
});