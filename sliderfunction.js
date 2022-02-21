const root = document.documentElement;

const cornerSlider = document.getElementById("cornerSlider");
const graySlider = document.getElementById("graySlider");
const brightSlider = document.getElementById("brightSlider");
const blurSlider = document.getElementById("blurSlider");
const saturateSlider = document.getElementById("saturateSlider");
const sepiaSlider = document.getElementById("sepiaSlider");

cornerSlider.addEventListener("input", (e) => {
    root.style.setProperty("--radius", `${e.target.value}%`);
});

graySlider.addEventListener("input", (e) => {
    root.style.setProperty("--gray", `${e.target.value}%`);
});

brightSlider.addEventListener("input", (e) => {
    root.style.setProperty("--bright", `${e.target.value}%`);
});

blurSlider.addEventListener("input", (e) => {
    root.style.setProperty("--blur", `${e.target.value}px`);
});

saturateSlider.addEventListener("input", (e) => {
    root.style.setProperty("--saturate", `${e.target.value}%`);
});

sepiaSlider.addEventListener("input", (e) => {
    root.style.setProperty("--sepia", `${e.target.value}%`);
});