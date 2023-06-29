const form = document.querySelector("form");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fontsize = document.querySelector("#fontsize").value;
  const fontcolor = document.querySelector("#fontcolor").value;
  document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
  document.documentElement.style.setProperty("--fontcolor", `${fontcolor}`);
  document.cookie = `fontsize=${fontsize};max-age=31536000`;
  document.cookie = `fontcolor=${fontcolor};max-age=31536000`;
});
 
const cookieString = document.cookie;
const cookies = cookieString.split(";");
for (const cookie of cookies) {
  const [name, value] = cookie.split("=");
  if (name.trim() === "fontsize") {
    document.documentElement.style.setProperty("--fontsize", `${value}px`);
  } else if (name.trim() === "fontcolor") {
    document.documentElement.style.setProperty("--fontcolor", `${value}`);
  }
}