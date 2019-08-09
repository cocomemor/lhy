
 /**
 * Created by CocoMemor @steam  http://steamcommunity.com/id/empty_lion/ on 2017/8/5.
 * /*感谢大佬们！真的非常感谢，我希望能给大家带来高质量的壁纸，谢谢你们的帮助。
  感谢Thx Iluvatar @steam (https://steamcommunity.com/id/IIIuvatar/)提供指导
  感谢Thx Alice @steam(http://steamcommunity.com/sharedfiles/filedetails/?id=912863941)的部分代码
 */
;(function ($, window, document, Math, undefined) {
    'use strict';

    let BackgroundMusic = {
        name: '1.ogg',
        isLoop: true,
        isPlay: false,
        volume: 0.75
    };
    let audio = document.createElement('audio');


    function setAudioName(n) {
        switch (n) {
            case 0:
                return '6.ogg';
            case 1:
                return '1.ogg';
            case 2:
                return '2.ogg';
            case 3:
                return '3.ogg';
            case 4:
                return '4.ogg';
            case 5:
                return '5.ogg';
            default:
                return '6.ogg';
        }
    }

    /** 获取随机Audio名字 */
    function getRandomName() {
        let random = Math.floor(6 * Math.random());
        return setAudioName(random);
    }

    /** 初始化audio */
    function initAudio() {
        audio.loop = true;
        audio.autoplay = 'autoplay';
    }

    /** 是否循环播放Audio */
    function isLoopAudio(isLoop) {
        audio.loop = isLoop;
    }

    /** 是否播放Audio */
    function isPlayAudio(isPlay) {
        isPlay ? audio.play() : audio.pause();
    }

    /** 设置音量 */
    function setAudioVolume(volume) {
        audio.volume = volume;
    }

    // wallpaper参数监视器
    //--------------------------------------------------------------------------------------------------------------

    $(document).ready(function () {

        initAudio();
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                if (properties.diyText1) {
                    document.getElementById("text01").textContent = properties.diyText1.value;
                }
                if (properties.diyText2) {
                    document.getElementById("text02").textContent = properties.diyText2.value;
                }
                if (properties.diyText3) {
                    document.getElementById("text03").textContent = properties.diyText3.value;
                }
                if (properties.diyText4) {
                    document.getElementById("text04").textContent = properties.diyText4.value;
                }
                if (properties.BGM_lhy) {
                    if (properties.BGM_lhy.value === 0) {
                        BackgroundMusic.name = getRandomName();
                    } else {
                        BackgroundMusic.name = setAudioName(properties.BGM_lhy.value);
                    }
                    audio.setAttribute('src', 'mymusic/' + BackgroundMusic.name);
                    isPlayAudio(BackgroundMusic.isPlay);
                }
                // 循环播放
                if (properties.Loop_lhy) {
                    BackgroundMusic.isLoop = properties.Loop_lhy.value;
                    isLoopAudio(BackgroundMusic.isLoop);
                }
                // 播放状态
                if (properties.Play_lhy) {
                    BackgroundMusic.isPlay = properties.Play_lhy.value;
                    isPlayAudio(BackgroundMusic.isPlay);
                }
                // 音量
                if (properties.Volume_lhy) {
                    BackgroundMusic.volume = properties.Volume_lhy.value / 100;
                    setAudioVolume(BackgroundMusic.volume);
                }
            }
        }
    });

})(jQuery, window, document, Math);