const ul = document.getElementById('case_slider_all_container');
const li = document.querySelectorAll('.slider_big_img');
const fb_message = document.getElementById('fb-root');
console.log(fb_message);
let index = 0;
let left_index = 1;
let arrow_left = document.getElementById('slider_arrow_left');
let arrow_right = document.getElementById('slider_arrow_right');

// index++;
// ul.style.transform = `translateX(${(-index * 50)}%)`;
// if ((index) % (li.length) == 0) {
//     ul.style.left = left_index * 500 + "%";
//     left_index++;
// }
arrow_left.addEventListener('click', function () {
    index--;
    ul.style.transform = `translateX(${(-index * 50)}%)`;
    if ((index - 4) % (li.length) == 0) {
        ul.style.left = (left_index - 2) * 500 + "%";
        left_index--;
    };
    fb_message.style.display= 'block';
});
// console.log(fb_message);
arrow_right.addEventListener('click', function () {
    index++;
    ul.style.transform = `translateX(${(-index * 50)}%)`;
    if ((index) % (li.length) == 0) {
        ul.style.left = left_index * 500 + "%";
        left_index++;
    };
    fb_message.style.display= 'none';
});
// ==========================  loging 頁面的js =============================
const yt_loding = document.getElementById('yt_loding');
const fb_loding = document.getElementById('fb_loding');
const fb_loding_close_btn = document.getElementById('fb_loding_close_btn');
const yt_loding_close_btn = document.getElementById('yt_loding_close_btn');
fb_loding_close_btn.addEventListener('click', function () {
  fb_loding.style.display= 'none';
});
yt_loding_close_btn.addEventListener('click', function () {
  yt_loding.style.display= 'none';
});


// ==========================  yt =============================


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('player', {
    height: '535.91',
    width: '900',
    videoId: 'gId9xFyID0o',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
    playerVars: {
      // 'autoplay': 1, 'controls': 0,
    },
  });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
//   }
function stopVideo() {
    // console.log('aa')
  player.stopVideo();
}
