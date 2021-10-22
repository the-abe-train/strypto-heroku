<script>
  // export let name;
  import Floater from "./components/Floater.svelte";
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
  <Floater />
  <h1>Cash isn't sexy. <b>Crypto is.</b></h1>
  <p>
    Strypto is introducing modern, decentralized currency to the world's oldest
    professions. <br /> Sign-up today!
  </p>
  <div class="buttons">
    <button class="hard-btn">Sign-up</button>
    <button class="soft-btn">Log-in</button>
  </div>
  <a href="#">Learn more</a>
</main>

<style>
  .navbar {
    /* float: left; */
    font-size: 1.25em;
    font-weight: 500;
    background-color: black;
    width: calc(100vw + 8px);
    height: 3.25em;
    position: absolute;
    left: -8px;
    top: -8px;
  }
  .nav-items {
    width: 90%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: space-between;
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
    padding: 1em;
    max-width: 240px;
    margin: 3.25em auto;
  }
  h1 {
    color: rgb(202, 120, 191);
    text-transform: uppercase;
    font-size: 4.25em;
    font-weight: 100;
}
button {
	background-color: transparent;
	color: rgb(202, 120, 191);
	border-color: rgb(202, 120, 191);
  }

  .hard-btn {
	  background-color: rgb(202, 120, 191);
	  color: rgb(31, 30, 30);
	  border-color: rgb(31, 30, 30);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
