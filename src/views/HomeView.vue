<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
AOS.init()
</script>


<template>
  <header class="h-screen w-full box-border p-5 relative z-30 bg-slate-900">
    <NavMenu />
    <div data-aos="zoom-in-up" data-aos-delay="1000" class="jumbo w-full h-5/6 flex justify-center items-center ">
      <h1 class="text-3xl w-80 text-white uppercase box-border p-4 font-sans text-center sm:text-4xl sm:w-96 md:w-130 md:text-6xl">
        <span>Welcome </span><br />
        to <span class="text-cyan-700 font-semibold">iuran</span> web
      </h1>
    </div>
  </header>

  <body>
    <div class="aboutContainer bg-white">
      <div class="flex flex-col max-w-3xl m-auto gap-6 items-center box-border p-10 md:flex-row md:gap-12 md:min-h-screen">
        <div data-aos="fade-up" class="leftAbout order-2 max-w-sm md:order-1">
          <h1 class="uppercase text-3.5 font-bold text-black text-center">tentang iuran web</h1>
          <article class="leading-8 p-6 text-xl font-light">
            Iuran web adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam itaque eum vitae reprehenderit nihil tempore modi, vero dolores cum facere ea assumenda, in quasi dicta ex aut voluptatem omnis. Consequatur veritatis culpa atque impedit.
          </article>
        </div>
        <div data-aos="fade-down" data-aos-delay="200" class="rightAbout order-1 md:order-2">
          <div class=" max-w-sm w-full duration-300 image hover:animate-spin">
            <img src="@/assets/mau-mati-kapan-lu.gif" alt="bryn" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>


.rightAbout img:hover {
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
}

</style>