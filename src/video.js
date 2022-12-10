import React from "react";

export default function Video() {
  let vid = document.getElementById("myVideo");

  function playVid() {
    vid.play();
  }

  function pauseVid() {
    vid.pause();
  }

  function increaseVelocity(x) {
    if (x >= 4) {
      vid.playbackRate = x / 4;
    } else {
      vid.playbackRate = 1;
    }
  }
  return (
    <div>
      <video id="myVideo">
        <source src="../public/sex1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <button onClick={playVid} type="button">
        Play Video
      </button>
    </div>
  );
}
