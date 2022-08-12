import generateJoke from "./generateJoke";
import "./styles/main.scss";
import img from "./assets/findTwoSum.png";

const testImg = document.getElementById("laughImg");
testImg.src = img;
generateJoke();
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
