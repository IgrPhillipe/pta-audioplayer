window.player = {
    bar: document.querySelector(".progress-bar"),
    barCurrent: document.querySelector(".bar-current"),
    ball: document.querySelector(".ball"),
    time: document.querySelector(".time"),

    playButton: document.querySelector(".play"),
    pauseButton: document.querySelector(".pause"),
    nextButton: document.querySelector(".next"),
    previousButton: document.querySelector(".previous"),
    forwardButton: document.querySelector(".forward"),
    rewindButton: document.querySelector(".rewind"),

    cover: document.querySelector(".main .cover"),
    title: document.querySelector(".details h2"),
    artist: document.querySelector(".details p"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,

    start() {
        this.update();
        this.audio.onended = () => this.end();
        this.chose();
        this.play();
        this.pause();
        this.next();
        this.previous();
        this.forward();
        this.rewind();
    },

    end() {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length) {
            this.restart();
        }
        this.update();
        this.audio.play();
    },

    update() {
        this.current();
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
    },

    current() {
        this.audio.addEventListener('timeupdate', () => {
            const {
                currentTime,
                duration
            } = this.audio;
            this.barCurrent.style.width = `${(currentTime / duration) * 100}%`
            this.ball.style.marginLeft = `${(currentTime / duration) * 100}%`
            this.time.innerHTML = `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)} / ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
        })
    },

    chose() {
        this.bar.addEventListener('click', () => {
            const bar = this.bar.getBoundingClientRect();
            const x = event.clientX;
            const progress = Math.round(((x - bar.left) / (bar.right - bar.left)) * 100);
            console.log(progress);
            this.audio.currentTime = (progress * this.audio.duration) / 100;
        })
    },

    play() {
        this.playButton.addEventListener('click', () => {
            this.audio.play();
            this.playButton.style.display = 'none';
            this.pauseButton.style.display = 'inline-block';
        })
    },

    pause() {
        this.pauseButton.addEventListener('click', () => {
            this.audio.pause();
            this.pauseButton.style.display = 'none';
            this.playButton.style.display = 'inline-block';
        })
    },

    next() {
        this.nextButton.addEventListener('click', () => {
            this.end()
        })
    },

    previous() {
        this.previousButton.addEventListener('click', () => {
            this.currentPlaying--;
            if (this.currentPlaying < 0) {
                this.restart();
            }
            this.update();
            this.audio.play();
        })
    },

    forward() {
        this.forwardButton.addEventListener('click', () => {
            this.audio.currentTime += 10;
        })
    },

    rewind() {
        this.rewindButton.addEventListener('click', () => {
            this.audio.currentTime -= 10;
        })
    }
};