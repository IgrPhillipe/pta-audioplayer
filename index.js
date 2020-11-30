const player = {
    cover: document.querySelector(".main .cover"),
    title: document.querySelector(".details h2"),
    artist: document.querySelector(".details p"),
    audio: document.querySelector("audio"),

    data: {
        title: "American Girl",
        artists: "Ta-Ku, Wafia",
        file: "./audio/American-Girl.mp3",
        cover: "./audio/American-Girl.jpg"
    },

    start() {
        this.cover.style.background = `url("${this.data.cover}") no-repeat center / cover`
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artists;
        this.audio.src = this.data.file;
    }


};

player.start();