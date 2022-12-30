<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
AOS.init()
</script>

<template>
    <div class=" sm:mt-0 bg-gray-800 md:p-0">
      <div class="md:grid md:grid-cols-3 md:gap-6 py-2">
        <div data-aos="zoom-in" data-aos-delay="300" class="md:col-span-1">
          <div class="px-4 sm:px-0 md:px-4">
            <h3 class="text-2xl md:text-xl font-medium leading-6 text-white pt-8">Selamat Datang di Halaman Pendaftaran</h3>
            <p class="mt-1 text-sm text-gray-200 py-2">Pake data rill ya kidz kalo mau diproses.</p>
            <img src="../assets/wailah-enak.gif" alt="Login Splash Images" class="xl:w-full login-splash-img pt-4" />
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class=" bg-gray-700 px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div data-aos="fade-left" data-aos-delay="100" class="col-span-6 sm:col-span-3">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-namadepan"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                        placeholder=" "
                        name="namadepan"
                        v-model="namadepan"/>
                      <label
                        for="floating-namadepan"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Nama Depan</label>
                    </div>
                  </div>
  
                  <div data-aos="fade-left" data-aos-delay="300" class="col-span-6 sm:col-span-3">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-namabelakang"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                        placeholder=" "
                        name="namabelakang"
                        v-model="namabelakang"/>
                      <label
                        for="floating-namabelakang"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Nama Belakang</label>
                    </div>
                  </div>

                  <div data-aos="fade-left" data-aos-delay="400" class="col-span-6 sm:col-span-3">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-NIK"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                        placeholder=" "
                        name="NIK"
                        v-model="NIK"/>
                      <label
                        for="floating-NIK"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >NIK</label>
                    </div>
                  </div>

                  <div data-aos="fade-left" data-aos-delay="500" class="col-span-6 sm:col-span-3">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-nokk"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                        placeholder=" "
                        name="nokk"
                        v-model="nokk"/>
                      <label
                        for="floating-nokk"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >No. KK</label>
                    </div>
                  </div>
  
                  <div data-aos="fade-left" data-aos-delay="600" class="col-span-6 sm:col-span-4">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-alamatemail"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                        placeholder=" "
                        name="alamatemail"
                        v-model="alamatemail"/>
                      <label
                        for="floating-alamatemail"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Alamat Email</label>
                    </div>
                  </div>

                  <div data-aos="fade-left" data-aos-delay="700" class="col-span-6 sm:col-span-3">
                    <label for="kelurahan" class="block text-sm font-medium text-gray-400">Kecamatan</label>
                    <select id="kelurahan" name="kelurahan" autocomplete="kelurahan-name" class="mt-1 block w-full rounded-md text-gray-200 border border-gray-200 bg-gray-700 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Madura United</option>
                      <option>Jaksel</option>
                      <option>Indonesia</option>
                    </select>
                  </div>
  
                  <div data-aos="fade-left" data-aos-delay="800" class="col-span-6">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-alamatrumah"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
                        placeholder=" "
                        name="alamatrumah"
                        v-model="alamatrumah"/>
                      <label
                        for="floating-alamatrumah"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Alamat Rumah</label>
                    </div>
                  </div>

                  <div data-aos="fade-left" data-aos-delay="200" class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-kelurahan"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
                        placeholder=" "
                        name="kelurahan"
                        v-model="kelurahan"/>
                      <label
                        for="floating-kelurahan"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kelurahan</label>
                    </div>
                  </div>
  
                  <div data-aos="fade-left" data-aos-delay="400" class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-rtrw"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
                        placeholder=" "
                        name="rtrw"
                        v-model="rtrw"/>
                      <label
                        for="floating-rtrw"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >RT / RW</label>
                    </div>
                  </div>
  
                  <div data-aos="fade-left" data-aos-delay="600" class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <div class="relative z-0 mb-6">
                      <input
                        type="text"
                        id="floating-kodepos"
                        class="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0099ff] focus:outline-none focus:ring-0 focus:border-[#0099ff] peer"
                        placeholder=" "
                        name="kodepos"
                        v-model="kodepos"/>
                      <label
                        for="floating-kodepos"
                        class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kode Pos</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-700 px-4 py-3 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center rounded-md bg-cyan-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Daftar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </template>  