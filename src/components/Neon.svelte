<link
  href="https://fonts.googleapis.com/css?family=Vibur:400"
  rel="stylesheet"
  type="text/css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
  rel="stylesheet"
/>

<div class="container">
  <h2 class="neon-text">Cash isn't sexy.</h2>
  <h1 class="neon-text">Crypto is.</h1>
</div>

<style>
  .container {
    /* background-color: #010a01; */
    margin: 3em 0;
  }

  .neon-text {
    color: white;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
      0 0 42px var(--main-pink), 0 0 82px var(--main-pink),
      0 0 92px var(--main-pink), 0 0 102px var(--main-pink);
    margin: .5rem;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    line-height: 1;
    font-size: 4rem;
    /* animation: pulsate 0.11s ease-in-out infinite alternate; */
  }
  h1 {
    /* font-family: "Vibur", sans-serif; */
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-weight: 400;
    line-height: 1;
    font-size: 6.2rem;
    animation: pulsate 0.11s ease-in-out infinite alternate;
  }

  @keyframes pulsate {
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,
        0 0 40px var(--main-pink), 0 0 80px var(--main-pink),
        0 0 90px var(--main-pink), 0 0 100px var(--main-pink),
        0 0 150px var(--main-pink);
    }

    0% {
      text-shadow: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff,
        0 0 38px var(--main-pink), 0 0 73px var(--main-pink),
        0 0 80px var(--main-pink), 0 0 94px var(--main-pink),
        0 0 140px var(--main-pink);
    }
  }
</style>
