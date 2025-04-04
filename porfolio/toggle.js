const themeToggle = document.querySelector(".input");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.checked = true;
}

// Toggle theme and save to localStorage
themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});
