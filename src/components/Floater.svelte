<div class="float-space">
  <img class="disco-ball" src="../images/toppng.com-colorful-disco-ball-png-700x700.png" alt="disco ball">
  <div class="floater f1">
    <p>Who carries cash anymore?</p>
  </div>
  <div class="floater f2">
    <p>Does anyone have change for <br/> a $20? I don't see an ATM</p>
  </div>
  <div class="floater f3">
    <p>How long do you think it takes to count those $1s?</p>
  </div>
  <div class="floater f4">
    <p>How many loonies can she even fit in there?</p>
  </div>
  <div class="floater f5">
    <p>Does she take interac? WealthSimple? Cheque???</p>
  </div>
  <div class="floater f6">
    <p>If only there was a better way!</p>
  </div>
</div>

<style>
  .float-space {
    width: 90%;
    overflow-x: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  .floater {
    font-family: "Open Sans", sans-serif;
    padding: .5em 0;
  }
  .disco-ball {
    width: 100%;
    grid-column: 4 / 5;
    grid-row: 3 / 4;
  }
  .f1 {
    grid-column: 2 / 4;
    grid-row: 1;
  }
  .f2 {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
  }
  .f3 {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .f4 {
    grid-column: 6 / 8;
    grid-row: 3 / 4;
  }
  .f5 {
    grid-column: 2 / 5;
    grid-row: 5;
  }
  .f6 {
    grid-column: 5 / 7;
    grid-row: 5;
  }

  p {
    font-size: 1.25em;
    margin: 0.5em 0.1em;
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
