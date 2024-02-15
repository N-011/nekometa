<template>
  <div class="home">
    <div class="background-container">
      <img class="background-image" src="../assets/img/caloguitar.jpeg" />
    </div>
    <div class="main-heading">
      <h4 class="accent-font small-heading">me?</h4>
      <h1 class="accent-font big-heading">// hyperlinke</h1>
    </div>
    <div class="floating-box"></div>

    <!-- <img alt="Vue logo" src="../assets/img/logo.png" /> -->
    <!-- <div class="background">
      <div class="header-text">
        <h1>Flamingo~</h1>
      </div>
      <div class="header-img">
        <img
          src="https://images.unsplash.com/photo-1650647441377-715a124f6a2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.background-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

.background-image {
  width: 100%;
  margin: -150px 0 0 0;
  filter: blur(50px);
}

.main-heading {
  margin: 130px 0px 0px 100px;
}

.main-heading > .small-heading {
  font-size: 1.7rem;
  margin: 0 0 -7px 65px;
  color: #ccd0cf55;
}

.main-heading > .big-heading {
  font-size: 4rem;
}

.header-text {
  height: 100%;
  width: 20%;
  text-align: center;
  margin-top: 10%;
  color: rgba(66, 66, 66, 0.349);
  margin-left: 180px;
}

.header-text > h1 {
  font-weight: 300;
  font-style: italic;
}

.header-img {
  height: 80%;
  width: 300px;
  margin-right: 180px;
}

.header-img > img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}

.floating-box {
  width: 90%;
  height: 200px;
  background-color: rgba(128, 128, 128, 0.052);
  margin: 200px auto 0 auto;
  border-radius: 100px;
  box-shadow: 0px 0px 70px 10px rgba(0, 0, 0, 0.75);
}
</style>
