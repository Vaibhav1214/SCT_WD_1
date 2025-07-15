document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const content = document.getElementById("content");

  const colorThemes = [
    { bg: "#ff4d4d", text: "#ffffff" }, // red
    { bg: "#ffa500", text: "#000000" }, // orange
    { bg: "#ffff4d", text: "#000000" }, // yellow
    { bg: "#4dff4d", text: "#000000" }, // green
    { bg: "#4dd2ff", text: "#000000" }, // sky blue
    { bg: "#4d4dff", text: "#ffffff" }, // blue
    { bg: "#d14dff", text: "#ffffff" }, // purple
    { bg: "#ff4da6", text: "#000000" }  // pink
  ];

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollPosition / docHeight;
    const index = Math.floor(scrollPercent * colorThemes.length);
    const theme = colorThemes[index] || { bg: "#ffffff", text: "#000000" };

    body.style.backgroundColor = theme.bg;
    content.style.color = theme.text;
  });
});
