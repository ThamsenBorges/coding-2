let myVideo;
let playing;
let button, button2;
let muted;
let volumeDownButton, volumeUpButton;
let myCurrentVolume = 1;


function setup() {
    

    myVideo = createVideo(['assets/codevideo.mp4']);
    button = createButton('Play');
    button2 = createButton('Mute');
    volumeDownButton = createButton('Volume Down');
    volumeUpButton = createButton('Volume Up');
    button.mousePressed(playVideo);
    button2.mousePressed(audioVolume);
    volumeDownButton.mousePressed(volumeDown);
    volumeUpButton.mousePressed(volumeUp);
    myVideo.size(640, 365);
    noCanvas()

}

function volumeDown() {
    myCurrentVolume -= .1;
    if (myCurrentVolume <= 0) {
        myCurrentVolume = 0;
    }
    print(myCurrentVolume);
    myVideo.volume(myCurrentVolume);
}

function volumeUp() {
    myCurrentVolume += .1;
    if (myCurrentVolume >= 1) {
        myCurrentVolume = 1;
    }
    print(myCurrentVolume);
    myVideo.volume(myCurrentVolume);
}

function audioVolume() {
    if (muted) {
        button2.html('Unmute')
        myVideo.volume(0);
    } else {
        button2.html('Mute');
        myVideo.volume(myCurrentVolume);
    }

    muted = !muted;

}

function playVideo() {

    if (playing) {
        myVideo.pause();
        button.html('Play');
        playing = false;
    } else {
        myVideo.loop();
        button.html('Pause');
        playing = true;

    }
    
    myVideo.volume(1);
}