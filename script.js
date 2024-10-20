// 語音檔案列表
const audioFiles = [
    'audio1.mp3', // 第一個語音檔案
    'audio2.mp3', // 第二個語音檔案
    'audio3.mp3', // 第三個語音檔案
    'audio4.mp3', // 第四個語音檔案
    'audio5.mp3'  // 第五個語音檔案
];

let currentAudioIndex = 0;
const audioElement = document.getElementById('audioPlayer');

// 播放按鈕事件
document.getElementById('playButton').addEventListener('click', playAudioSequence);
document.getElementById('stopButton').addEventListener('click', stopAudio);

// 連續播放語音
function playAudioSequence() {
    if (currentAudioIndex >= audioFiles.length) {
        currentAudioIndex = 0; // 從頭開始播放
    }
    audioElement.src = audioFiles[currentAudioIndex];
    audioElement.play();
    audioElement.onended = function() {
        currentAudioIndex++;
        if (currentAudioIndex < audioFiles.length) {
            playAudioSequence(); // 播放下一個語音
        }
    };
}

// 停止播放
function stopAudio() {
    audioElement.pause();
    audioElement.currentTime = 0;
    currentAudioIndex = 0;
}
