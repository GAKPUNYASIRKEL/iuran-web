<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
AOS.init()
</script>


<template>
  <header>
    <NavMenu />
    <div data-aos="zoom-in-up" data-aos-delay="1000" class="jumbo">
      <h1>
        <span>Welcome </span><br />
        to <a class="text-cyan-700"> iuran</a> web
      </h1>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--backgroundColor);
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  position: relative;
  z-index: 30;
}
.jumbo {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jumbo h1 {
  font-family: 'Roboto Mono', sans-serif;
  font-size: 2.2rem;
  width: 20.8rem;
  color: #fff;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
}
.jumbo span {
  color: var(--accentColor);
  /* text-shadow: rgba(86, 232, 169, 0.334) 1px 1px 4px; */
}
.socials {
  background-color: var(--mainColor);
  width: 1.5rem;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.1rem 0.5rem;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
  left: 2rem;
}
.socials a {
  color: var(--backgroundColor);
}
@media screen and (min-width: 400px) {
  .jumbo h1 {
    font-size: 2.5rem;
    width: 25.49rem;
  }
}
@media screen and (min-width: 700px) {
  .jumbo h1 {
    font-size: 4rem;
    width: 34rem;
  }
}
</style>