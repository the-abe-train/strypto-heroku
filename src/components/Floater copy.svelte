<div class="float-space">
  <div class="floater f1">
    <p>Who carries cash anymore?</p>
  </div>
  <div class="floater f2">
    <p>Does anyone have change for a $20?</p>
  </div>
</div>

<style>
  .float-space {
    width: 90%;
    /* height: 6em; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
  }
  .floater {
    font-family: "Open Sans", sans-serif;
    color: rgb(209, 0, 181);
    position: relative;
    display: flex;
    width: 15em;
  }
  .f1 {
    left: 1%;
  }
  .f2 {
    left: 50%;
  }

  p {
    font-size: 1.5em;
    margin: 0.1em 0.1em;
    -webkit-animation: floating-text 2s ease alternate infinite;
    -moz-animation: floating-text 2s ease alternate infinite;
    -ms-animation: floating-text 2s ease alternate infinite;
    -o-animation: floating-text 2s ease alternate infinite;
    animation: floating-text 2s ease alternate infinite;
  }

  @-webkit-keyframes floating-text {
    0% {
      -webkit-transform: translateY(0.1em);
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
  }
  @-moz-keyframes floating-text {
    0% {
      -moz-transform: translateY(0.1em);
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
  }
  @-ms-keyframes floating-text {
    0% {
      -ms-transform: translateY(0.1em);
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
  }
  @-o-keyframes floating-text {
    0% {
      -o-transform: translateY(0.1em);
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
  }
  @keyframes floating-text {
    0% {
      transform: translateY(0.1em);
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
        0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
  }
</style>
