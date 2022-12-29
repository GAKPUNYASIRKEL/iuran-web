<script setup>
import { onMounted } from 'vue'
import EyesLooking from './EyesLooking.vue';
onMounted(() => {
  const menuCheck = document.querySelector('#check')
  const menuList = document.querySelector('.menuList')
  menuCheck.addEventListener('click', () => {
    menuList.classList.toggle('tampilkanmenu')
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menuList') && !e.target.closest('.hamburger') && menuList.classList.contains('tampilkanmenu')) {
      menuCheck.click()
    }
  })
})
const getElementPosition = (elementQuery) => {
  const element = document.querySelector(elementQuery).offsetTop - 64
  return element
}
const gotoElement = (elementQuery) => {
  const elementPosition = getElementPosition(elementQuery)
  window.scrollTo(0, elementPosition)
}
</script>
<template>
  <nav data-aos="fade-down" data-aos-delay="100" class="w-full bg-slate-900 p-4 items-center flex justify-between box-border relative px-2 uppercase z-40 text-sm font-semibold fixed top-0 left-0 md:">
    <div class="left cursor-pointer items-center gap-4 flex">
      <EyesLooking />
      <h1 class="hidden">Nama App</h1>
    </div>
    <div class="right">
      <ul class="menuList absolute left-0 top-14 w-full bg-gray-800 flex flex-col gap-9 box-border pt-1 z-10 translate-x-full opacity-0 duration-1000">
        <li class="block px-1 lg:px-4 py-3 text-white  hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150 "><RouterLink to="/">Home</RouterLink></li>
        <li class="block px-1 lg:px-4 py-3 text-white  hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150"><RouterLink to="/about">Tabel</RouterLink></li>
        <li class="block px-1 lg:px-4 py-3 text-white  hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150"><RouterLink to="/login">Login</RouterLink></li>
        <li class="block px-1 lg:px-4 py-3 text-white  hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150"><RouterLink to="/daftar">Daftar</RouterLink></li>
      </ul>
    </div>
    <div class="hamburger w-12 h-12 flex flex-col gap-2 justify-center items-center scale-75 translate-x-px">
      <label for="check" class="bar relative cursor-pointer w-12 h-10">
        <input id="check" type="checkbox" />
        <span class="top absolute w-11 h-1 bg-white rounded-full inline-block duration-300 left-0 top-1"></span>
        <span class="middle absolute w-11 h-1 bg-white rounded-full inline-block duration-300 left-0 top-4"></span>
        <span class="bottom absolute w-11 h-1 bg-white rounded-full inline-block duration-300 left-0 bottom-2"></span>
      </label>
    </div>
  </nav>
</template>
<style scoped>

.tampilkanmenu {
  transform: translateX(0);
  opacity: 1;
}
.right ul li a {
  padding: 1rem 0;
}
.menuAppear {
  transform: translateX(0);
}

input[type='checkbox'] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}
input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}
input[type]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
}

</style>