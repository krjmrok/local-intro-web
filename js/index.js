window.alert("Hello World!");

const text = document.querySelector("#colorText")
const color = document.querySelector("#colorPicker");
/*const search = document.querySelector("#searchText");👈試しにやってみたけど微妙...*/

const colorBg = () => {
    text.style.color = color.value;
    text.textContent = `ColorCode：${color.value}`;
}

color.addEventListener("input",colorBg);