<template>
  <div class="loader"></div>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader--hidden");
});
</script>

<style>
@import "./assets/css/styles.css";
</style>
