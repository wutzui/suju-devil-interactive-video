/*jslint browser: true, plusplus: true */
/*global window, document */

window.onload = function () {
    'use strict';

    var body = document.querySelector('body'),
        firstChildOfBody = body.firstElementChild,
        gridLayer = document.createElement('div'),
        gridChoice = 0;

    gridLayer.setAttribute('id', 'column-baseline-grid');

    if (null !== firstChildOfBody) {
        body.insertBefore(gridLayer, firstChildOfBody);
    } else {
        body.textContent = 'The body element does not have a child element.';
    }

    document.onkeydown = function (evnt) {
        if (27 === evnt.keyCode) {
            switch (gridChoice) {
            case 0:
                gridLayer.classList.add('column-grid');
                gridLayer.classList.remove('user-supplied-bg-image');

                break;

            case 1:
                gridLayer.classList.remove('column-grid');
                gridLayer.classList.add('modular-grid');

                break;

            case 2:
                gridLayer.classList.remove('modular-grid');
                gridLayer.classList.add('baseline-grid');

                break;

            case 3:
                gridLayer.classList.remove('baseline-grid');
                gridLayer.classList.add('all-grids');

                break;

            case 4:
                gridLayer.classList.remove('all-grids');
                gridLayer.classList.add('user-supplied-bg-image');

                break;

            case 5:
                gridLayer.classList.remove('user-supplied-bg-image');
                break;
            }

            if (gridChoice++ === 5) {
                gridChoice = 0;
            }
        }
    };
};

/* jslint browser: true, devel: true, maxlen: 85 */
/* global window */

window.onload = function() {
    'use strict';

// =================================================================================
// play video interactions
// =================================================================================

    var openDiv = document.getElementById ('open');
    var header = document.getElementsByTagName ('header')[0];

    var playBtn = document.getElementById ('open-btn');
    var ppContainer = document.getElementById ('pause-play');   
    var video = document.getElementById('video');

    var restartBtn = document.getElementById ('restart-btn');
    var pauseBtn = document.getElementById ('pause-btn');
    var playAgainBtn = document.getElementById ('play-btn');

    var endContent = document.getElementById ('end');
    var replayBtn = document.getElementById ('replay-btn');    

    function videoPlay () {    
        if (video.pause) {
            video.play();
        }
        openDiv.style.opacity = '0';
        openDiv.style.transition = 'all 2s';
        ppContainer.style.opacity = '1';

        setTimeout (function() {
            openDiv.style.display = 'none';
            header.style.opacity = '1';
        }, 2000);

    }

    function videoPause () {
        if (video.play) {
            video.pause();
        }
    }

    function videotoggleKey (e) {
        var x = e.keyCode;
        if (x == 32) {  // 32 is the space key
            video.paused ? video.play() : video.pause();
            openDiv.style.opacity = '0';
            openDiv.style.transition = 'all 2s';
            ppContainer.style.opacity = '1';

            setTimeout (function() {
                openDiv.style.display = 'none';
                header.style.opacity = '1';
            }, 2000);   
        }      
    }

    function videoPlayAgain () {
        if (video.pause) {
            video.play();
        }
    }

    function videoRestart () {
        video.currentTime = 0;
        video.play();
    }


    function videoEnded() {
        setTimeout (function() {
            endContent.style.display = 'block';
        }, 1000);
    }

    function videoReplay() {
        if (video.pause) {
            video.play();
        }
        endContent.style.opacity = '0';
        endContent.style.transition = 'all 2s';

        setTimeout (function() {
            endContent.style.display = 'none';
        }, 2000);
    }



    //initial play
    playBtn.addEventListener('click', videoPlay, false);

    //restart & play & pause
    restartBtn.addEventListener('click', videoRestart, false);
    pauseBtn.addEventListener('click', videoPause, false);
    playAgainBtn.addEventListener('click', videoPlayAgain, false);

    // press space-key to toggle the play & pause
    window.addEventListener('keypress', videotoggleKey, false);

    video.addEventListener('ended', videoEnded, false);
    replayBtn.addEventListener('click', videoReplay, false);


// =================================================================================
// keypress imgs
// =================================================================================

    // var imgHolder = document.getElementById('key-imgs');
    // var body = document.getElementsByTagName('body')[0];
    // var imgs = document.getElementById('key-imgs');
    var img1 = document.getElementById('img_1');
    var img2 = document.getElementById('img_2');
    var img3 = document.getElementById('img_3');


    function keyImgs_in(e) {
        var x = e.keyCode;
        if (x == 72) {  // 72 is the H key
            img1.style.opacity = '1';
        }  
        if (x == 17) {  // 27 is the ctrl key
            img2.style.opacity = '1';
        }  
        if (x == 65) {  // 27 is the a key
            img3.style.opacity = '1';
        }      
    }

    function keyImgs_out(e) {
        var x = e.keyCode;
        if (x == 72) {  // 72 is the H key
            img1.style.opacity = '0';
        }
        if (x == 17) {  // 27 is the ctrl key
            img2.style.opacity = '0'; 
        }   
        if (x == 65) {  // 27 is the ctrl key
            img3.style.opacity = '0'; 
        }   
    }

    window.addEventListener ('keydown', keyImgs_in, false); 
    window.addEventListener ('keyup', keyImgs_out, false);  

// =================================================================================
// About modal
// =================================================================================

    // set variables. 
    var firstModal = document.getElementById ('about-modal');
    var firstModalBtn = document.getElementById('about-btn');
    var headerModalBtn = document.getElementById('header-btn');
    var closeBtn = document.getElementById('close-btn');

    // set a function to open the first modal.
    function openFirstModal() {
        firstModal.style.opacity ='1';
        firstModal.style.zIndex = '2000';   
    }

    // set the function to close the first modal.
    function xClose() {
        firstModal.style.opacity ='0';
        firstModal.style.zIndex = '-2000';
    }

    // set the click toggle modal function.
    function toggleModal() {
        if (firstModal.style.zIndex !== '2000') {
            openFirstModal();
        } else {
            xClose();
        }
    }

    // call the toggleModal function.
    headerModalBtn.addEventListener ('click', toggleModal, false);
    firstModalBtn.addEventListener ('click', toggleModal, false);
    closeBtn.addEventListener ('click', xClose, false);

    /******************************************************************************/

};