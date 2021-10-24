<script>
  // export let name;
  import Floater from "./components/Floater.svelte";
  import Neon from "./components/Neon.svelte";
  import Call from "./components/Call.svelte";
</script>

<nav class="navbar">
  <div class="nav-items">
    <p class="logo">Strypto</p>
    <div class="nav-right">
      <p class="nav-action">Log-in</p>
      <p class="nav-action">Sign-up</p>
    </div>
  </div>
</nav>
<main>
  <!-- <Floater /> -->
  <!-- <h1>Cash isn't sexy. <b>Crypto is.</b></h1> -->
  <div class="hero-section">
    <div class="banner">
      <Neon />
    </div>
    <div class="call-to-action">
      <Call />
    </div>
  </div>
</main>

<style>
  .navbar {
    /* float: left; */
    font-size: 1.25em;
    font-weight: 500;
    background-color: black;
    color: var(--main-cyan);
    width: calc(100% + 8px);
    /* width: 100vw; */
    height: 3.25em;
    position: absolute;
    left: -8px;
    top: -8px;
    box-shadow: 1px 10px 30px rgba(0, 0, 0, 0.5);
  }
  .nav-items {
    width: clamp(0em, 80%, 50em);
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .logo {
    margin: 1em 1em;
    font-family: "Pacifico", cursive;
  }
  .nav-right {
    display: flex;
    text-align: center;
  }
  .nav-action {
    margin: 1em 1em;
    text-align: center;
  }
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 240px;
    /* margin: 1.5rem 0; */
    padding: 1em;
  }
  .hero-section {
    /* width: clamp(0em, 80%, 50em); */
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 1em 0;
  }
  /* .banner {
    grid-column: 1 / 2;
  } */

  .call-to-action {
    margin: 5em;
    /* grid-column: 2 / end; */
  }


  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
