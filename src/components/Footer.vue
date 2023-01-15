<script>
export default {
  data() {
    return {
      dateNow: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="mx-auto py-2 text-center text-white bg-slate-700 xl:mb-0 footer">
    <span class="copyright">Copyright {{ dateNow }} ©️. All Right Reserved.</span> <br>
    <span>v1.0.0 Made by <a>syamil</a>.</span>
  </footer>
</template>