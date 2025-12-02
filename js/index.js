window.alert("Hello World!");
const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

const colorBg = () => {
    text.textContent = `ColorCode：${color.value}`;
}

color.addEventListener("input",colorBg);