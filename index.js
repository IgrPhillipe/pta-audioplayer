const cover = document.querySelector(".player .main .cover");
const title = document.querySelector(".details h2");
const artist = document.querySelector(".details p");
const audio = document.querySelector("audio");

const data = {
    title: "American Girl",
    artists: "Ta-Ku, Wafia",
    file: "./audio/American-Girl.mp3",
    cover: "./audio/American-Girl.jpg"
};

cover.style.background = `url("${data.cover}") no-repeat center / cover`
title.innerText = data.title;
artist.innerText = data.artists;
audio.src = data.file;