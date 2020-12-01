window.player = {
    cover: document.querySelector(".main .cover"),
    title: document.querySelector(".details h2"),
    artist: document.querySelector(".details p"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    currentPlaying:0,

    start() {
        this.update();
        this.audio.onended = () => this.next();
    },
    next() {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length) {
            this.restart();
        }
        this.update();
        this.audio.play();
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlaying];
        this.cover.style.background = `url('${(path(this.currentAudio.cover))}') no-repeat center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artists;
        this.audio.src = path(this.currentAudio.file);
    },
    restart() {
        this.currentPlaying = 0;
        this.update();
        this.audio.stop();
    }
};