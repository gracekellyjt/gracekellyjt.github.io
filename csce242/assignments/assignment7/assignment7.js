document.getElementById("sunny-nav").onclick = () => {
    const div = document.getElementById("sun");
    div.classList.remove("hidden");
}


document.getElementById("btn-become-sunny").onclick = () => {
    document.getElementById("img-cloudy").classList.add("hidden");
    document.getElementById("img-sunny").classList.remove("hidden");
}

const colorInput = document.querySelector("#btn-color input[type='color']");
colorInput.addEventListener("input", () => {
    const chosenColor = colorInput.value;
    document.getElementById("colorCode").textContent = `Color Code: ${chosenColor}`;
    document.getElementById("colorCode").style.color = chosenColor; // make text match color
});