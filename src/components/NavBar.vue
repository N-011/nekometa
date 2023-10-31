<template>
  <div class="navbar-container">
    <RouterLink to="/" class="navbar-item" id="nav-logo">
      <h1 id="nk">NK</h1>
      <h1 id="mt">MT</h1>
    </RouterLink>
    <RouterLink to="/about" class="navbar-item">
      <h1>ABOUT</h1>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>

<!-- <script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script> -->
